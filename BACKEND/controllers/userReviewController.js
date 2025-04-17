const pool = require('../db');

// Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM reviews ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching reviews', error: err });
  }
};

// Create a new review (with image file)
exports.createReview = async (req, res) => {
  const { name, review, profession, email } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const newReview = await pool.query(
      'INSERT INTO reviews (name, review, profession, email, image) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, review, profession, email, image]
    );
    res.status(201).json(newReview.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error creating review', error: err });
  }
};

// Delete a review (only user who created it can delete)
exports.deleteReview = async (req, res) => {
  const { id, email } = req.body;
  try {
    const result = await pool.query('DELETE FROM reviews WHERE id = $1 AND email = $2 RETURNING *', [id, email]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Review not found or unauthorized' });
    }
    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting review', error: err });
  }
};

// Update a review
exports.updateReview = async (req, res) => {
  const { id } = req.params;
  const { review } = req.body;
  try {
    const updatedReview = await pool.query(
      'UPDATE reviews SET review = $1 WHERE id = $2 RETURNING *',
      [review, id]
    );
    if (updatedReview.rows.length === 0) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json(updatedReview.rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Error updating review', error: err });
  }
};
