const express = require("express");
const { getCatalogCourses, getCatalogLessons } = require("../lib/catalog");

const router = express.Router();

router.get("/courses", async (req, res) => {
  try {
    const courses = await getCatalogCourses();
    return res.json({ success: true, courses });
  } catch (error) {
    console.error("Catalog courses error:", error);
    return res.status(500).json({ success: false, message: "Could not load courses" });
  }
});

router.get("/courses/:courseId/lessons", async (req, res) => {
  try {
    const lessons = await getCatalogLessons(req.params.courseId);
    return res.json({ success: true, lessons });
  } catch (error) {
    console.error("Catalog lessons error:", error);
    return res.status(500).json({ success: false, message: "Could not load lessons" });
  }
});

module.exports = router;
