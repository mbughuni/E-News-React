const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const newsRoutes = require("./routes/newsRoutes");
const commentRoutes = require("./routes/commentRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const profileRoutes = require("./routes/profileRoutes");

const app = express();
const PORT = process.env.PORT || 5000;  // Make sure to load PORT from environment variables if available

// Middlewares
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parse incoming URL-encoded requests
app.use("/uploads", express.static(path.join(__dirname, "uploads")));  // Serve static files for uploads

// Routes
app.use("/api/profile", profileRoutes);
app.use("/api", authRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/reviews", reviewRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error("Unexpected Error:", err);
  res.status(500).json({ message: "Something went wrong, please try again later." });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
