const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// ===============================
// REGISTER
// ===============================
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email and password are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Explicitly initialize progress fields to avoid seeded values leaking into new accounts
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      xp: 0,
      level: 1,
      completedLessons: 0,
      courseProgress: [],
      lessonSessions: [],
    });

    const secret = process.env.JWT_SECRET || "devsecret";
    const token = jwt.sign({ id: user._id }, secret, { expiresIn: "7d" });

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        xp: user.xp,
        level: user.level,
        completedLessons: user.completedLessons,
        courseProgress: user.courseProgress || [],
        lessonSessions: user.lessonSessions || [],
      },
    });
  } catch (error) {
    console.error("Registration error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while registering",
    });
  }
});

// ===============================
// LOGIN
// ===============================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const secret = process.env.JWT_SECRET || "devsecret";
    const token = jwt.sign({ id: user._id }, secret, { expiresIn: "7d" });

    res.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        xp: user.xp,
        level: user.level,
        completedLessons: user.completedLessons,
        courseProgress: user.courseProgress || [],
        lessonSessions: user.lessonSessions || [],
      },
    });
  } catch (error) {
    console.error("Login error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while logging in",
    });
  }
});

module.exports = router;
