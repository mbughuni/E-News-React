const pool = require("../db");

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

module.exports = { addNews };
