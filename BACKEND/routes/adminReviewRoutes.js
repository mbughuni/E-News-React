const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminReviewController");
const multer = require("multer");
const path = require("path");

// Setup for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

router.delete("/", adminController.adminDeleteReview);
router.put("/:id", upload.single("image"), adminController.adminUpdateReview);

module.exports = router;
