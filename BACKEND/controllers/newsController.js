const pool = require("../db");

// Add a new news article
const addNews = async (req, res) => {
  try {
    const { title, content, author, category } = req.body;
    const image = req.file ? req.file.filename : null;

    const result = await pool.query(
      "INSERT INTO news (title, content, author, category, image) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, content, author, category, image]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error adding news:", err.message);
    res.status(500).json({ message: "Failed to add news" });
  }
};

// Get a single news article by ID
const getNewsById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM news WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "News not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching news by ID:", err.message);
    res.status(500).json({ message: "Failed to fetch news article" });
  }
};

module.exports = { addNews, getNewsById };
