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
    // Ensure we convert the count to a number (using radix 10)
    res.status(200).json({ count: parseInt(result.rows[0].count, 10) });
  } catch (err) {
    console.error("Error fetching comment count:", err.message);
    res.status(500).json({ message: "Failed to fetch comment count" });
  }
};

// Get comment counts for all news articles (bulk endpoint)
const getAllCommentCounts = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT news_id, COUNT(*) AS count FROM comments GROUP BY news_id"
    );
    // Transform the result into an object: { news_id: count, ... }
    const commentCounts = result.rows.reduce((acc, row) => {
      acc[row.news_id] = parseInt(row.count, 10);
      return acc;
    }, {});
    res.status(200).json(commentCounts);
  } catch (err) {
    console.error("Error fetching comment counts for all news articles:", err.message);
    res.status(500).json({ message: "Failed to fetch comment counts" });
  }
};

// Delete comment by ID
const deleteComment = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM comments WHERE id = $1", [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (err) {
    console.error("Error deleting comment:", err.message);
    res.status(500).json({ message: "Failed to delete comment" });
  }
};

module.exports = { 
  addComment, 
  getCommentsByNewsId,
  getCommentCount,
  deleteComment,
  getAllCommentCounts
};
