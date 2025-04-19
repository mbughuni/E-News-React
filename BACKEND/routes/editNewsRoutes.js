// routes/editNewsRoutes.js
const express = require("express");
const router = express.Router();
const {
  upload,
  getNewsById,
  updateNewsById,
} = require("../controllers/editNewsController");

// GET a single news item by ID
router.get("/:id", getNewsById);

// PUT update a news item by ID (with optional image upload)
router.put("/:id", upload.single("image"), updateNewsById);

module.exports = router;
