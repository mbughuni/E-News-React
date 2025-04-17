const pool = require("../db");

// Get profile by email
const getProfile = async (req, res) => {
  const { email } = req.params;
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update profile by email
const updateProfile = async (req, res) => {
  const { email } = req.params;
  const { first_name, middle_name, last_name, contact_number, dob } = req.body;

  try {
    const result = await pool.query(
      `
        UPDATE users SET
          first_name = $1,
          middle_name = $2,
          last_name = $3,
          contact_number = $4,
          dob = $5
        WHERE email = $6
        RETURNING *
      `,
      [first_name, middle_name, last_name, contact_number, dob, email]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json({ message: "Profile updated successfully", user: result.rows[0] });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getProfile,
  updateProfile,
};
