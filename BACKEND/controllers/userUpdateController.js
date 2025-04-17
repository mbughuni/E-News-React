// controllers/userUpdateController.js

const pool = require('../db'); // ✅ PostgreSQL pool connection

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email, profession } = req.body;

  try {
    const result = await pool.query(
      "UPDATE users SET name = $1, email = $2, profession = $3 WHERE id = $4 RETURNING *",
      [name, email, profession, userId]
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

module.exports = { updateUser };
