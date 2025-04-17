// routes/availableNewRoutes.js
const express = require("express");
const router = express.Router();
const { getAllNews } = require("../controllers/availableNewsController");

router.get("/api", getAllNews);

module.exports = router;
