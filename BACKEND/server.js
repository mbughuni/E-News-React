const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS config: Allow frontend access
app.use(cors({
  origin: "http://localhost:5173", // Change to your frontend origin
  credentials: true,
}));

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve static files (like image uploads)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Import all route files (moved messageRoutes import to the top)
const authRoutes = require("./routes/authRoutes");
const newsRoutes = require("./routes/newsRoutes");
const commentRoutes = require("./routes/commentRoutes");
const profileRoutes = require("./routes/profileRoutes");
const userReviewRoutes = require("./routes/userReviewRoutes");
const adminReviewRoutes = require("./routes/adminReviewRoutes");
const adminUserRoutes = require("./routes/adminUserRoutes");
const contactRoutes = require("./routes/contactRoutes");
const messageRoutes = require("./routes/messagesRoutes");  // Import the message routes

// ✅ Register route prefixes
app.use("/api", authRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/profile", profileRoutes); // <-- Important one for profile
app.use("/api/reviews", userReviewRoutes);
app.use("/api/admin/reviews", adminReviewRoutes);
app.use("/api/admin/users", adminUserRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/messages", messageRoutes);  // Register message routes

// ✅ Catch-all error handler
app.use((err, req, res, next) => {
  console.error("Unexpected Error:", err.stack);
  res.status(500).json({ message: "Something went wrong, please try again later." });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
