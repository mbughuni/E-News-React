const express = require("express");
const router = express.Router();
const multer = require("multer");
const pool = require("../db");
const { registerUser } = require("../controllers/userController");

// File upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

router.post("/register", upload.single("profilePicture"), registerUser);

// ✅ Add this route to fetch user profile by email
router.get("/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
