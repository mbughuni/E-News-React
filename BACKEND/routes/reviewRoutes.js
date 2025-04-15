const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const {
  addReview,
  getAllReviews,
  deleteReview,
  updateReview,
  adminDeleteReview,
  adminUpdateReview,
} = require("../controllers/reviewController");

// User routes
router.post("/", upload.single("image"), addReview);
router.get("/", getAllReviews);
router.delete("/:id", deleteReview);
router.put("/:id", upload.single("image"), updateReview);

// Admin routes
router.delete("/admin/:id", adminDeleteReview);
router.put("/admin/:id", upload.single("image"), adminUpdateReview);

module.exports = router;
