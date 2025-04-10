const express = require("express");
const multer = require("multer");
const path = require("path");
const { addNews, getNewsById } = require("../controllers/newsController");
const pool = require("../db");

const router = express.Router();

// File upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

/**
 * @route POST /api/news/add
 * @desc Add a new news article
 */
router.post("/add", upload.single("image"), addNews);

/**
 * @route GET /api/news
 * @desc Get all news articles
 */
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM news ORDER BY created_at DESC");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching news:", err.message);
    res.status(500).json({ message: "Failed to fetch news" });
  }
});

/**
 * @route GET /api/news/:id
 * @desc Get a single news article by ID
 */
router.get("/:id", getNewsById);

module.exports = router;
