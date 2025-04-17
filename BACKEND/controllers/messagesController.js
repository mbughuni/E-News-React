const pool = require('../db'); // Import your PostgreSQL connection pool

// Controller to get all messages from the 'contact_messages' table
const getMessages = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contact_messages');
    
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No messages found" });
    }

    res.status(200).json(result.rows); // Send the retrieved messages
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Failed to fetch messages" });
  }
};

// Controller to delete a message by ID
const deleteMessage = async (req, res) => {
  const { id } = req.params; // Extract message ID from URL parameters
  try {
    const result = await pool.query(
      'DELETE FROM contact_messages WHERE id = $1 RETURNING *', 
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    console.error("Error deleting message:", error);
    res.status(500).json({ message: "Failed to delete message" });
  }
};

module.exports = { getMessages, deleteMessage };
