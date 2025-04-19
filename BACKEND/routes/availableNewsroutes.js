const express = require('express');
const router = express.Router();
const { getAvailableNews, deleteNews } = require('../controllers/availableNewsController');

// GET /api/available
router.get('/available', getAvailableNews);

// DELETE /api/news/:id
router.delete('/news/:id', deleteNews);

module.exports = router;
