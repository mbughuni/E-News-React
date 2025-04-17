const pool = require("../db");

// Get complete profile with news by email
const getCompleteProfile = async (req, res) => {
  const { email } = req.params;
  
  try {
    // Start transaction for data consistency
    await pool.query('BEGIN');

    // 1. Get user profile
    const userQuery = `
      SELECT 
        id, email, first_name, middle_name, last_name, 
        contact_number, dob, image_url, created_at
      FROM users 
      WHERE email = $1
    `;
    const userResult = await pool.query(userQuery, [email]);

    if (userResult.rowCount === 0) {
      await pool.query('ROLLBACK');
      return res.status(404).json({ message: "User not found" });
    }

    const user = userResult.rows[0];
    const userId = user.id;

    // 2. Get user's news with additional metrics
    const newsQuery = `
      SELECT 
        n.*,
        COUNT(c.id) AS comment_count,
        COUNT(l.id) AS like_count
      FROM news n
      LEFT JOIN comments c ON n.id = c.news_id
      LEFT JOIN likes l ON n.id = l.news_id
      WHERE n.user_id = $1
      GROUP BY n.id
      ORDER BY n.created_at DESC
    `;
    const newsResult = await pool.query(newsQuery, [userId]);

    // Commit transaction
    await pool.query('COMMIT');

    res.status(200).json({
      profile: user,
      news: newsResult.rows,
      newsCount: newsResult.rowCount
    });

  } catch (error) {
    await pool.query('ROLLBACK');
    console.error("Error fetching complete profile:", error);
    res.status(500).json({ 
      message: "Server error",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

// Update profile by email
const updateProfile = async (req, res) => {
  const { email } = req.params;
  const { first_name, middle_name, last_name, contact_number, dob } = req.body;

  // Validate required fields
  if (!first_name || !last_name) {
    return res.status(400).json({ message: "First name and last name are required" });
  }

  try {
    const result = await pool.query(
      `UPDATE users SET
        first_name = COALESCE($1, first_name),
        middle_name = $2,
        last_name = COALESCE($3, last_name),
        contact_number = $4,
        dob = $5,
        updated_at = NOW()
       WHERE email = $6
       RETURNING 
         id, email, first_name, middle_name, last_name, 
         contact_number, dob, image_url, created_at`,
      [first_name, middle_name, last_name, contact_number, dob, email]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json({ 
      message: "Profile updated successfully", 
      user: result.rows[0] 
    });

  } catch (error) {
    console.error("Error updating profile:", error);
    if (error.code === '23505') { // Unique violation
      return res.status(409).json({ message: "Profile update conflict" });
    }
    res.status(500).json({ 
      message: "Server error during profile update",
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

module.exports = {
  getCompleteProfile,  // Combined endpoint
  updateProfile
};