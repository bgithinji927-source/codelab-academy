const express = require("express");
const ensureAuth = require("../middleware/ensureAuth");
const { listLabsForCourse, startLab, submitLab } = require("../lib/labs");

const router = express.Router();

router.get("/course/:courseId", ensureAuth, (req, res) => {
  return res.json({ success: true, labs: listLabsForCourse(req.params.courseId) });
});

router.post("/:labId/start", ensureAuth, (req, res) => {
  const result = startLab(req.user.id, req.params.labId);
  if (!result) return res.status(404).json({ success: false, message: "Lab not found" });
  return res.json({ success: true, ...result });
});

router.post("/attempt/:attemptId/submit", ensureAuth, (req, res) => {
  const result = submitLab(req.user.id, req.params.attemptId, req.body?.answer);
  if (result.error) return res.status(404).json({ success: false, message: result.error });
  return res.json({ success: true, ...result });
});

module.exports = router;
