const pool = require("../db");

// Add comment
const addComment = async (req, res) => {
  const { news_id, name, content } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO comments (news_id, name, content) VALUES ($1, $2, $3) RETURNING *",
      [news_id, name, content]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error adding comment:", err.message);
    res.status(500).json({ message: "Failed to add comment" });
  }
};

// Get comments for a news article
const getCommentsByNewsId = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT * FROM comments WHERE news_id = $1 ORDER BY created_at DESC",
      [id]
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching comments:", err.message);
    res.status(500).json({ message: "Failed to fetch comments" });
  }
};

// Get comment count for a news article
const getCommentCount = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "SELECT COUNT(*) FROM comments WHERE news_id = $1",
      [id]
    );
    res.status(200).json({ count: result.rows[0].count });
  } catch (err) {
    console.error("Error fetching comment count:", err.message);
    res.status(500).json({ message: "Failed to fetch comment count" });
  }
};

module.exports = { addComment, getCommentsByNewsId, getCommentCount };
