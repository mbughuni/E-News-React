const express = require('express');
const router = express.Router();
const adminUserController = require('../controllers/adminUserController');

// Route to get all users
router.get('/users/all', adminUserController.getAllUsers);

// Route to delete a user
router.delete("/delete/:id", adminUserController.deleteUser);


module.exports = router;
