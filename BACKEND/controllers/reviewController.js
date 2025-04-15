const pool = require("../db");

// Add a new review (user only)
const addReview = async (req, res) => {
  const { review, name, profession } = req.body;
  const email = req.body.email;
  const image = req.file ? req.file.filename : null;

  try {
    const userResult = await pool.query("SELECT id FROM users WHERE email = $1", [email]);
    const userId = userResult.rows[0]?.id;

    if (!userId) return res.status(400).json({ message: "User not found" });

    await pool.query(
      "INSERT INTO reviews (review, name, profession, image, user_id) VALUES ($1, $2, $3, $4, $5)",
      [review, name, profession, image, userId]
    );

    res.json({ message: "Review added successfully!" });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all reviews (for admin & users)
const getAllReviews = async (req, res) => {
  const { sortBy, filterByProfession } = req.query;
  let query = "SELECT * FROM reviews";
  const values = [];

  if (filterByProfession) {
    values.push(filterByProfession);
    query += ` WHERE profession = $${values.length}`;
  }

  if (sortBy === "name") {
    query += " ORDER BY name ASC";
  } else if (sortBy === "latest") {
    query += " ORDER BY id DESC";
  }

  try {
    const result = await pool.query(query, values);
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//////////////////////////////
// USER DELETE REVIEW (owns)
//////////////////////////////
const deleteReview = async (req, res) => {
  const reviewId = req.params.id;
  const email = req.body.email;

  try {
    const userResult = await pool.query("SELECT id FROM users WHERE email = $1", [email]);
    const userId = userResult.rows[0]?.id;
    if (!userId) return res.status(400).json({ message: "User not found" });

    const result = await pool.query("SELECT * FROM reviews WHERE id = $1 AND user_id = $2", [reviewId, userId]);
    if (result.rows.length === 0) return res.status(403).json({ message: "Not authorized to delete this review" });

    await pool.query("DELETE FROM reviews WHERE id = $1", [reviewId]);
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    console.error("Error deleting review:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//////////////////////////////
// ADMIN DELETE REVIEW (any)
//////////////////////////////
const adminDeleteReview = async (req, res) => {
  const reviewId = req.params.id;

  try {
    const result = await pool.query("DELETE FROM reviews WHERE id = $1", [reviewId]);
    if (result.rowCount === 0) return res.status(404).json({ message: "Review not found" });

    res.json({ message: "Review deleted by admin successfully" });
  } catch (error) {
    console.error("Admin error deleting review:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//////////////////////////////
// USER UPDATE REVIEW (owns)
//////////////////////////////
const updateReview = async (req, res) => {
  const reviewId = req.params.id;
  const { review, name, profession } = req.body;
  const email = req.body.email;
  const image = req.file ? req.file.filename : null;

  try {
    const userResult = await pool.query("SELECT id FROM users WHERE email = $1", [email]);
    const userId = userResult.rows[0]?.id;
    if (!userId) return res.status(400).json({ message: "User not found" });

    const result = await pool.query("SELECT * FROM reviews WHERE id = $1 AND user_id = $2", [reviewId, userId]);
    if (result.rows.length === 0) return res.status(403).json({ message: "Not authorized to update this review" });

    if (image) {
      await pool.query(
        "UPDATE reviews SET review = $1, name = $2, profession = $3, image = $4 WHERE id = $5",
        [review, name, profession, image, reviewId]
      );
    } else {
      await pool.query(
        "UPDATE reviews SET review = $1, name = $2, profession = $3 WHERE id = $4",
        [review, name, profession, reviewId]
      );
    }

    res.json({ message: "Review updated successfully" });
  } catch (error) {
    console.error("Error updating review:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//////////////////////////////
// ADMIN UPDATE REVIEW (any)
//////////////////////////////
const adminUpdateReview = async (req, res) => {
  const reviewId = req.params.id;
  const { review, name, profession } = req.body;
  const image = req.file ? req.file.filename : null;

  try {
    const checkResult = await pool.query("SELECT * FROM reviews WHERE id = $1", [reviewId]);
    if (checkResult.rows.length === 0) return res.status(404).json({ message: "Review not found" });

    if (image) {
      await pool.query(
        "UPDATE reviews SET review = $1, name = $2, profession = $3, image = $4 WHERE id = $5",
        [review, name, profession, image, reviewId]
      );
    } else {
      await pool.query(
        "UPDATE reviews SET review = $1, name = $2, profession = $3 WHERE id = $4",
        [review, name, profession, reviewId]
      );
    }

    res.json({ message: "Review updated by admin successfully" });
  } catch (error) {
    console.error("Admin error updating review:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addReview,
  getAllReviews,
  deleteReview,
  updateReview,
  adminDeleteReview,
  adminUpdateReview,
};
