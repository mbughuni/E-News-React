// controllers/availableNewsController.js
const db = require("../db"); // adjust based on your DB setup

const getAllNews = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM news");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteNews = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await db.query("DELETE FROM news WHERE id = ?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "News item not found" });
    }
    res.json({ message: "News item deleted successfully" });
  } catch (error) {
    console.error("Error deleting news:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllNews,
  deleteNews,
};
