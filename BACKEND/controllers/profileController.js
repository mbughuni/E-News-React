const pool = require('../db');

exports.getProfile = async (req, res) => {
  try {
    const { email } = req.params;

    const result = await pool.query(`
      SELECT 
        first_name, 
        middle_name, 
        last_name, 
        email, 
        contact_number, 
        dob, 
        profile_picture AS image_url
      FROM users 
      WHERE email = $1
    `, [email]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the first row
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: 'Server error' });
  }
};
