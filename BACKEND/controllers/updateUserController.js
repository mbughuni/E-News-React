const pool = require('../db'); // Assuming you're using PostgreSQL and a pool connection

// Controller to update a user by email
const updateUser = async (req, res) => {
  const { email } = req.params;
  const { first_name, middle_name, last_name, contact_number, dob } = req.body;

  try {
    const result = await pool.query(
      `UPDATE users 
       SET first_name = $1,
           middle_name = $2,
           last_name = $3,
           contact_number = $4,
           dob = $5
       WHERE email = $6
       RETURNING *`,
      [first_name, middle_name, last_name, contact_number, dob, email]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "Profile updated successfully", user: result.rows[0] });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error while updating profile." });
  }
};

module.exports = { updateUser };
