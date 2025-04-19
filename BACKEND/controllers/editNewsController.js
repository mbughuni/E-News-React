// controllers/editNewsController.js
const pool = require("../db");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = "uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// Multer middleware
const upload = multer({ storage: storage });

// ✅ Get news by ID
const getNewsById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM news WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "News item not found" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching news by ID:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Update news by ID (with optional image)
const updateNewsById = async (req, res) => {
  const { id } = req.params;
  const { title, content, category, author } = req.body;

  let image;

  try {
    if (req.file) {
      image = req.file.filename;
    } else {
      const current = await pool.query("SELECT image FROM news WHERE id = $1", [id]);
      image = current.rows[0]?.image || null;
    }

    const result = await pool.query(
      `UPDATE news 
       SET title = $1, content = $2, category = $3, author = $4, image = $5 
       WHERE id = $6 RETURNING *`,
      [title, content, category, author, image, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "News item not found" });
    }

    res.json({ message: "✅ News updated successfully", updatedNews: result.rows[0] });
  } catch (err) {
    console.error("Error updating news:", err.message);
    res.status(500).json({ message: "❌ Server error" });
  }
};

module.exports = {
  upload,
  getNewsById,
  updateNewsById,
};
