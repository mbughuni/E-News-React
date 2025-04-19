const express = require('express');
const router = express.Router();
const { getAdminNews } = require('../controllers/adminAvailableNewsController');

// GET /api/available/admin
router.get('/available/admin', getAdminNews);

module.exports = router;