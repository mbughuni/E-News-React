const pool = require("../db");

// Admin delete any review
const adminDeleteReview = async (req, res) => {
  const { id } = req.body;
  try {
    const result = await pool.query("DELETE FROM reviews WHERE id = $1", [id]);
    if (result.rowCount === 0) return res.status(404).json({ message: "Review not found" });
    res.json({ message: "Review deleted by admin successfully" });
  } catch (error) {
    console.error("Admin error deleting review:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Admin update review
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
  adminDeleteReview,
  adminUpdateReview,
};
