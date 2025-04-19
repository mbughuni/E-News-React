const express = require("express");
const router = express.Router();
const { getUserNews } = require("../controllers/userNewsController");

router.post("/news/user", getUserNews); // Using POST to send email in body

module.exports = router;
