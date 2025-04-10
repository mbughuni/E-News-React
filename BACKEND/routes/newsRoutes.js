const express = require("express");
const multer = require("multer");
const path = require("path");
const { addNews } = require("../controllers/newsController");

const router = express.Router();

// File upload config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

router.post("/add", upload.single("image"), addNews);

module.exports = router;
