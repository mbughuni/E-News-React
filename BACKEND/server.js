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


// ✅ Import all route files
const authRoutes = require("./routes/authRoutes");
const newsRoutes = require("./routes/newsRoutes");
const commentRoutes = require("./routes/commentRoutes");
const userReviewRoutes = require("./routes/userReviewRoutes");
const adminReviewRoutes = require("./routes/adminReviewRoutes");
const adminUserRoutes = require("./routes/adminUserRoutes");
const contactRoutes = require("./routes/contactRoutes");
const messageRoutes = require("./routes/messagesRoutes"); 
const avnewsRoutes = require("./routes/availableNewRoutes");  // Ensure this import is correct
const profileRoutes = require('./routes/profileRoutes');
const userUpdateRoutes = require('./routes/userUpdateRoutes'); // Adjust path

// Make sure to parse JSON
app.use("/api/users", userUpdateRoutes);

app.use("/api", authRoutes);
app.use("/api/news", newsRoutes);  // newsRoutes for regular news operations (create, update, delete)
app.use("/api/comments", commentRoutes);

app.use("/api/reviews", userReviewRoutes);
app.use("/api/admin/reviews", adminReviewRoutes);
app.use("/api/admin/users", adminUserRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/messages", messageRoutes);  // Register message routes
app.use("/api/available-news", avnewsRoutes);  // Change this line to handle available news separately
app.use('/api/profile', profileRoutes);
// ✅ Catch-all error handler
app.use((err, req, res, next) => {
  console.error("Unexpected Error:", err.stack);
  res.status(500).json({ message: "Something went wrong, please try again later." });
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
