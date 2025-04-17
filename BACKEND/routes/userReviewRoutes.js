const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/userReviewController");
const multer = require("multer");
const path = require("path");

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Folder where images will be saved
  },
  filename: function (req, file, cb) {
    // Generate a unique filename
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Routes

// GET all reviews - for users
router.get("/", reviewController.getAllReviews);

// POST a new review with optional image
router.post("/", upload.single("image"), reviewController.createReview);

// DELETE a review (id and email provided in req.body)
router.delete("/delete", reviewController.deleteReview);

// UPDATE a review (only review text for now, can expand if needed)
router.put("/:id", reviewController.updateReview);

module.exports = router;
