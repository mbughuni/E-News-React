const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  addReview,
  getAllReviews,
  deleteReview,
  updateReview,
} = require("../controllers/reviewController");

// Image upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

// Route to add a review
router.post("/add", upload.single("image"), addReview);

// Route to get all reviews
router.get("/all", getAllReviews);

// Route to delete a review
router.delete("/delete/:id", deleteReview);

// Route to update a review
router.put("/:id", upload.single("image"), updateReview);

module.exports = router;
