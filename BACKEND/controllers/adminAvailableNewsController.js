const pool = require('../db');

// Fetch only news where author is 'admin'
const getAdminNews = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM news WHERE author = $1 ORDER BY created_at DESC',
      ['Admin']
    );
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching admin news:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAdminNews };