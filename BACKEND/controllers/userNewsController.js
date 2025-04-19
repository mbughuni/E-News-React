const pool = require("../db");

const getUserNews = async (req, res) => {
  const { email } = req.body;
  try {
    const result = await pool.query(
      "SELECT * FROM news WHERE email = $1 ORDER BY created_at DESC",
      [email]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching user news:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getUserNews };
