const pool = require('../db');

const createContactMessage = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO contact_messages (name, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, phone, subject, message]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error saving contact message:", error);
    res.status(500).json({ message: "Failed to save contact message." });
  }
};

module.exports = { createContactMessage };
