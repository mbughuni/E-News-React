// routes/userUpdateRoutes.js

const express = require('express');
const router = express.Router();
const { updateUser } = require('../controllers/userUpdateController');

router.put('/update/:id', updateUser);

module.exports = router;
