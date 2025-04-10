// controllers/userController.js
const pool = require("../db");

const registerUser = async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      contactNumber,
      address,
      email,
      password,
      dob,
      gender,
      role = "user" // Default role to 'user' if not provided
    } = req.body;

    const profilePicture = req.file ? req.file.filename : null;

    const query = `
      INSERT INTO users (
        first_name, middle_name, last_name, contact_number, address,
        email, password, dob, gender, profile_picture, role
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    `;

    await pool.query(query, [
      firstName,
      middleName,
      lastName,
      contactNumber,
      address,
      email,
      password,
      dob,
      gender,
      profilePicture,
      role
    ]);

    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Full error:", error); 
    console.error("Error registering user:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser };
