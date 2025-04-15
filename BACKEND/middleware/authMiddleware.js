// const jwt = require("jsonwebtoken");
// const pool = require("../db");

// const protect = async (req, res, next) => {
//   const token = req.header("Authorization")?.split(" ")[1]; // Assuming token is sent as "Bearer token"

//   if (!token) {
//     return res.status(401).json({ message: "No token, authorization denied" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // Add user info to the request
//     next();
//   } catch (error) {
//     console.error("Token verification failed", error);
//     res.status(401).json({ message: "Token is not valid" });
//   }
// };

// module.exports = { protect };
