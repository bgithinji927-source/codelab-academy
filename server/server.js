try {
  require("dotenv").config();
} catch (error) {
  console.warn(
    "dotenv is not installed in this runtime; continuing without .env loading"
  );
}

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const User = require("./models/User");
const authRoutes = require("./routes/auth");
const kaiRoutes = require("./routes/kai");

const app = express();

// ============================================
// MIDDLEWARE
// ============================================

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("REQUEST:", req.method, req.originalUrl);
  next();
});

// ============================================
// AUTH ROUTES
// ============================================

app.use("/api/auth", authRoutes);

// ============================================
// KAI AI TEACHING ROUTES
// ============================================

app.use("/api/kai", kaiRoutes);

// ============================================
// DEBUG AUTH ROUTES
// ============================================

console.log(
  "Auth routes loaded:",
  authRoutes.stack.length
);

console.log(
  "Auth route details:",
  authRoutes.stack.map((r) => ({
    path: r.route?.path,
    methods: r.route?.methods,
  }))
);

// ============================================
// MONGODB CONNECTION
// ============================================

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error(
      "MongoDB connection failed:",
      error.message
    );
  });

// ============================================
// HEALTH CHECK
// ============================================

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "CodeLab Academy backend is running",
  });
});

// ============================================
// PRODUCTION FRONTEND
// ============================================

// Railway runs the API and the Vite build from one service.
const frontendPath = path.join(__dirname, "..", "dist");
app.use(express.static(frontendPath));

app.get(/^(?!\/api(?:\/|$)).*/, (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ============================================
// START SERVER
// ============================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `CodeLab Academy backend running on port ${PORT}`
  );
});