const pool = require('../db');

const updateUserByEmail = async (req, res) => {
  const userEmail = req.params.email;
  const {
    first_name,
    middle_name,
    last_name,
    contact_number,
    dob
  } = req.body;

  const profilePicture = req.file ? req.file.filename : null;

  try {
    const result = await pool.query(
      `UPDATE users 
       SET 
         first_name = $1,
         middle_name = $2,
         last_name = $3,
         contact_number = $4,
         dob = $5,
         profile_picture = COALESCE($6, profile_picture)
       WHERE email = $7 
       RETURNING *`,
      [
        first_name,
        middle_name,
        last_name,
        contact_number,
        dob,
        profilePicture,
        userEmail
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Update error:", error.message);
    res.status(500).json({ message: "Failed to update user profile" });
  }
};

module.exports = { updateUserByEmail };
