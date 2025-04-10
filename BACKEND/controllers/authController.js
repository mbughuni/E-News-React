const pool = require("../db");

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Hardcoded admin login
    if (email === "admin" && password === "123") {
      return res.json({
        message: "Admin login successful",
        user: {
          id: 0,
          email: "admin",
          role: "admin",
          first_name: "Admin",
          profile_picture: null,
        },
      });
    }

    // Normal user login from DB
    const userResult = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (userResult.rows.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = userResult.rows[0];

    // Compare plain text passwords
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Return user info
    res.json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        role: user.role || "user", // fallback to "user" if role is null
        first_name: user.first_name,
        profile_picture: user.profile_picture,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { login };
