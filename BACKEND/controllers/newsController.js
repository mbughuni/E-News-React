const pool = require("../db");

// Add a new news article
const addNews = async (req, res) => {
  try {
    const { title, content, author, category } = req.body;
    const image = req.file ? req.file.filename : null;

    const result = await pool.query(
      "INSERT INTO news (title, content, author, category, image) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, content, author, category, image]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error adding news:", err.message);
    res.status(500).json({ message: "Failed to add news" });
  }
};

// Get a single news article by ID
const getNewsById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM news WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "News not found" });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error fetching news by ID:", err.message);
    res.status(500).json({ message: "Failed to fetch news article" });
  }
};
// Get all news posted by a specific user
const getNewsByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await pool.query(
      "SELECT * FROM news WHERE user_id = $1 ORDER BY created_at DESC",
      [userId]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "No news found for this user" });
    }

    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching user news:", err.message);
    res.status(500).json({ message: "Failed to fetch user news" });
  }
};

// Toggle like for a news article (like/unlike)
const toggleLike = async (req, res) => {
  const newsId = req.params.id;
  const { userId } = req.body; // Assuming the userId is sent in the request body

  try {
    // Check if the user already liked this news article
    const existingLike = await pool.query(
      'SELECT * FROM news_likes WHERE user_id = $1 AND news_id = $2',
      [userId, newsId]
    );

    let userLiked;
    let likeCount;

    if (existingLike.rows.length > 0) {
      // User has already liked, so we remove the like (unlike)
      await pool.query(
        'DELETE FROM news_likes WHERE user_id = $1 AND news_id = $2',
        [userId, newsId]
      );
      // Decrement the like count in the news table
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
      // Increment the like count in the news table
      await pool.query(
        'UPDATE news SET like_count = like_count + 1 WHERE id = $1',
        [newsId]
      );
      userLiked = true;
    }

    // Fetch the updated like count from the news table
    const likeRes = await pool.query('SELECT like_count FROM news WHERE id = $1', [newsId]);
    likeCount = likeRes.rows[0].like_count;

    // Send response with updated like count and whether the user liked the article
    res.json({ likeCount, userLiked });
  } catch (err) {
    console.error("Error toggling like:", err.message);
    res.status(500).json({ message: "Error toggling like" });
  }
};

module.exports = {
   addNews, getNewsById, toggleLike,
   getNewsByUserId
   };
