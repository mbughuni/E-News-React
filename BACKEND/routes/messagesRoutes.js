const express = require("express");
const router = express.Router();
const { getMessages, deleteMessage } = require("../controllers/messagesController"); // Import controller functions

// Route to fetch all messages
router.get("/contact_messages", getMessages);

// Route to delete a message by ID
router.delete("/contact_messages/:id", deleteMessage);

module.exports = router;
