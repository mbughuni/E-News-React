// routes/userUpdateRoutes.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { updateUserByEmail } = require('../controllers/userUpdateController');

// Configure storage for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Make sure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Multer middleware for single file upload with the field name 'profilePicture'
const upload = multer({ storage });

// Use multer in your PUT route
router.put('/:email', upload.single('profilePicture'), updateUserByEmail);

module.exports = router;
