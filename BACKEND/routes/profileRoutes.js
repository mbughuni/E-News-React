const express = require("express");
const router = express.Router();
const { getProfile, updateProfile } = require("../controllers/profileController");

router.get("/:email", getProfile);
router.put("/update/:email", updateProfile);

module.exports = router;
