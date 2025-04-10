// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const upload = require("../utils/multer");
const { registerUser } = require("../controllers/userController");
const { login } = require("../controllers/authController"); 
//registration routes
router.post("/register", upload.single("profilePicture"), registerUser);
// Login route
router.post("/login", login); 

module.exports = router;
