const express = require("express");
const {
  addComment,
  getCommentsByNewsId,
  getCommentCount,
  deleteComment,
  getAllCommentCounts,
} = require("../controllers/commentController");

const router = express.Router();

// Add a new comment
router.post("/add", addComment); // POST /api/comments/add

// Get all comments for a specific news article
router.get("/:id", getCommentsByNewsId); // GET /api/comments/:id

// Get comment count for a single news article
router.get("/count/:id", getCommentCount); // GET /api/comments/count/:id

// Get comment counts for all news articles (bulk)
router.get("/counts", getAllCommentCounts); // GET /api/comments/counts

// Delete a comment by its ID
router.delete("/:id", deleteComment); // DELETE /api/comments/:id

module.exports = router;
