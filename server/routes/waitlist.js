const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const ensureAuth = require("../middleware/ensureAuth");
const { getCatalogCourses } = require("../lib/catalog");

const router = express.Router();

router.post("/", ensureAuth, async (req, res) => {
  try {
    const courseId = String(req.body?.courseId || "").trim();
    if (!courseId) {
      return res.status(400).json({ success: false, message: "Course ID is required" });
    }

    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        success: false,
        code: "DATABASE_UNAVAILABLE",
        message: "Waitlist storage is unavailable right now. Please try again later.",
      });
    }

    const catalogCourses = await getCatalogCourses({ includeInactive: true });
    const course = catalogCourses.find((item) => String(item.id) === courseId);
    if (!course) {
      return res.status(404).json({ success: false, message: "Course not found" });
    }

    if (course.enrollmentStatus === "open") {
      return res.status(400).json({ success: false, message: "This course is already open for enrollment" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (!Array.isArray(user.waitlistedCourses)) user.waitlistedCourses = [];
    const alreadyJoined = user.waitlistedCourses.some((item) => String(item.courseId) === courseId);
    if (!alreadyJoined) {
      user.waitlistedCourses.push({
        courseId,
        courseTitle: course.title || courseId,
        joinedAt: new Date(),
      });
      await user.save();
    }

    return res.json({
      success: true,
      courseId,
      alreadyJoined,
      waitlistedCourses: user.waitlistedCourses,
      message: alreadyJoined
        ? "You are already on this course waitlist."
        : "You are on the waitlist. We will let you know when this course opens.",
    });
  } catch (error) {
    console.error("Waitlist error:", error);
    return res.status(500).json({ success: false, message: "Could not join the course waitlist" });
  }
});

module.exports = router;
