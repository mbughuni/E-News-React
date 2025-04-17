const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Fix: Configure CORS properly and move it to the top
app.use(cors({
  origin: "http://localhost:5173", // frontend port (Vite)
  credentials: true
}));

// ✅ These should come after cors
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Import routes
const authRoutes = require("./routes/authRoutes");
const newsRoutes = require("./routes/newsRoutes");
const commentRoutes = require("./routes/commentRoutes");
const profileRoutes = require("./routes/profileRoutes");
const userReviewRoutes = require("./routes/userReviewRoutes");
const adminReviewRoutes = require("./routes/adminReviewRoutes");
const adminUserRoutes = require('./routes/adminUserRoutes');

// Use routes
app.use("/api", authRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/reviews", userReviewRoutes);
app.use("/api/admin/reviews", adminReviewRoutes);
app.use("/api/admin/users", adminUserRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error("Unexpected Error:", err);
  res.status(500).json({ message: "Something went wrong, please try again later." });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
