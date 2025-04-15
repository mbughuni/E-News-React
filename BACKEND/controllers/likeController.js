// likeController.js
const pool = require("../db");

// Toggle like for a news article (like/unlike)
const toggleLikeForNews = async (req, res) => {
  const newsId = req.params.id;
  const { userId } = req.body; // Assuming the userId is passed in the body
  
  try {
    // Check if the user has already liked the news article
    const existingLike = await pool.query(
      'SELECT * FROM news_likes WHERE user_id = $1 AND news_id = $2',
      [userId, newsId]
    );

    let userLiked;
    let likes;

    if (existingLike.rows.length > 0) {
      // User has already liked, so we remove the like (unlike)
      await pool.query(
        'DELETE FROM news_likes WHERE user_id = $1 AND news_id = $2',
        [userId, newsId]
      );
      await pool.query(
        'UPDATE news SET like_count = like_count - 1 WHERE id = $1',
        [newsId]
      );
      userLiked = false;
    } else {
      // User has not liked yet, so we add the like
      await pool.query(
        'INSERT INTO news_likes (user_id, news_id) VALUES ($1, $2)',
        [userId, newsId]
      );
      await pool.query(
        'UPDATE news SET like_count = like_count + 1 WHERE id = $1',
        [newsId]
      );
      userLiked = true;
    }

    // Fetch the updated like count
    const likeRes = await pool.query('SELECT like_count FROM news WHERE id = $1', [newsId]);
    likes = likeRes.rows[0].like_count;

    res.json({ likes, userLiked });
  } catch (err) {
    console.error("Error toggling like:", err.message);
    res.status(500).json({ message: "Error toggling like" });
  }
};

module.exports = { toggleLikeForNews };
