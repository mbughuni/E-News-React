const express = require("express");
const router = express.Router();
const {
  getCompleteProfile,
  updateProfile,
} = require("../controllers/profileController");

// Get full profile + news by email
router.get("/email/:email", getCompleteProfile);

// Update profile by email
router.put("/email/:email", updateProfile);

module.exports = router;
