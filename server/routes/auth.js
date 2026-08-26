const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ensureAuth = require("../middleware/ensureAuth");

const router = express.Router();

function configuredAdminEmails() {
  return String(process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

function serializeUser(user) {
  const email = String(user.email || "").toLowerCase();
  const isAdmin = user.role === "admin" || configuredAdminEmails().includes(email);

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    role: isAdmin ? "admin" : "user",
    isAdmin,
    isActive: user.isActive !== false,
    appearancePreset: user.appearancePreset || "default",
    designPreset: user.designPreset || "classic",
    kaiBackground: user.kaiBackground || null,
    xp: user.xp,
    level: user.level,
    completedLessons: user.completedLessons,
    courseProgress: user.courseProgress || [],
    lessonSessions: user.lessonSessions || [],
  };
}

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
      user: serializeUser(user),
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
// PROFILE
// ===============================
router.patch("/profile", ensureAuth, async (req, res) => {
  try {
    const name = String(req.body?.name || "").trim();
    if (!name) {
      return res.status(400).json({ success: false, message: "Profile name is required" });
    }
    if (name.length < 2 || name.length > 80) {
      return res.status(400).json({ success: false, message: "Profile name must be between 2 and 80 characters" });
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: { name } },
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    return res.json({ success: true, user: serializeUser(user) });
  } catch (error) {
    console.error("Profile update error:", error);
    return res.status(500).json({ success: false, message: "Could not save your profile" });
  }
});

// ===============================
// APPEARANCE AND DESIGN PREFERENCES
// ===============================
router.patch("/preferences", ensureAuth, async (req, res) => {
  try {
    const allowedAppearancePresets = new Set([
      "default",
      "midnight",
      "light",
      "cyber-purple",
      "matrix",
      "ocean",
      "sunset",
      "clean",
      "forest",
      "contrast",
      "white-purple",
    ]);
    const allowedDesignPresets = new Set(["classic", "focus", "rail", "canvas"]);
    const update = {};

    if (req.body?.appearancePreset !== undefined) {
      const appearancePreset = String(req.body.appearancePreset || "");
      if (!allowedAppearancePresets.has(appearancePreset)) {
        return res.status(400).json({ success: false, message: "Invalid appearance preset" });
      }
      update.appearancePreset = appearancePreset;
    }

    if (req.body?.kaiBackground !== undefined) {
      const kaiBackground = String(req.body.kaiBackground || "");
      const allowedKaiBackgrounds = new Set(["violet-aurora", "circuit-night", "neon-orbit", "terminal-green", "soft-study"]);
      if (!allowedKaiBackgrounds.has(kaiBackground)) {
        return res.status(400).json({ success: false, message: "Invalid Kai background" });
      }
      update.kaiBackground = kaiBackground;
    }

    if (req.body?.designPreset !== undefined) {
      const designPreset = String(req.body.designPreset || "");
      if (!allowedDesignPresets.has(designPreset)) {
        return res.status(400).json({ success: false, message: "Invalid design preset" });
      }
      update.designPreset = designPreset;
    }

    if (Object.keys(update).length === 0) {
      return res.status(400).json({ success: false, message: "No valid preference supplied" });
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: update },
      { new: true, runValidators: true }
    );
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    return res.json({ success: true, user: serializeUser(user) });
  } catch (error) {
    console.error("Preference update error:", error);
    return res.status(500).json({ success: false, message: "Could not save preference" });
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

    if (user.isActive === false) {
      return res.status(403).json({
        success: false,
        message: "This account has been disabled. Contact an administrator.",
      });
    }

    const secret = process.env.JWT_SECRET || "devsecret";
    const token = jwt.sign({ id: user._id }, secret, { expiresIn: "7d" });

    res.json({
      success: true,
      message: "Login successful",
      token,
      user: serializeUser(user),
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
