const mongoose = require("mongoose");

const TeachingMaterialSchema = new mongoose.Schema({
  courseId: { type: String, required: true, index: true },
  courseTitle: { type: String, default: "" },
  lessonId: { type: String, default: "", index: true },
  lessonTitle: { type: String, default: "" },
  title: { type: String, required: true },
  originalFilename: { type: String, required: true },
  mimeType: { type: String, required: true },
  fileSize: { type: Number, default: 0 },
  extractedText: { type: String, default: "" },
  status: { type: String, enum: ["ready", "failed", "disabled"], default: "ready", index: true },
  processingError: { type: String, default: "" },
  enabled: { type: Boolean, default: true, index: true },
  uploadedBy: { type: String, default: "" },
}, { timestamps: true });

module.exports = mongoose.models.TeachingMaterial || mongoose.model("TeachingMaterial", TeachingMaterialSchema);
