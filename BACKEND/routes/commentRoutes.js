const express = require("express");
const {
  addComment,
  getCommentsByNewsId,
  getCommentCount,
} = require("../controllers/commentController");

const router = express.Router();

router.post("/add", addComment); // POST /api/comments/add
router.get("/:id", getCommentsByNewsId); // GET /api/comments/:id
router.get("/count/:id", getCommentCount); // GET /api/comments/count/:id

module.exports = router;
