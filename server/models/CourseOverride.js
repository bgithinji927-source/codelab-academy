const mongoose = require("mongoose");

const courseOverrideSchema = new mongoose.Schema(
  {
    courseId: { type: String, required: true, unique: true, index: true },
    title: String,
    description: String,
    category: String,
    level: String,
    active: { type: Boolean, default: true },
    updatedBy: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("CourseOverride", courseOverrideSchema);
