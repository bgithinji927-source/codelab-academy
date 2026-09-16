const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    topics: {
      type: [String],
      default: [],
    },
    courseId: {
      type: String,
      required: true,
      index: true,
    },
    courseTitle: {
      type: String,
      default: "",
      trim: true,
    },
    lessonId: {
      type: String,
      required: true,
      index: true,
    },
    lessonTitle: {
      type: String,
      default: "",
      trim: true,
    },
    sourceType: {
      type: String,
      enum: ["upload", "url"],
      required: true,
    },
    videoUrl: {
      type: String,
      default: "",
      trim: true,
    },
    storageFileId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    cloudinaryPublicId: {
      type: String,
      default: "",
      trim: true,
    },
    cloudinaryUrl: {
      type: String,
      default: "",
      trim: true,
    },
    cloudinaryResourceType: {
      type: String,
      default: "video",
      trim: true,
    },
    originalFilename: {
      type: String,
      default: "",
    },
    mimeType: {
      type: String,
      default: "video/mp4",
    },
    fileSize: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 0,
      min: 0,
    },
    posterUrl: {
      type: String,
      default: "",
      trim: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    createdBy: {
      type: String,
      default: "",
    },
    updatedBy: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

videoSchema.index({ courseId: 1, lessonId: 1, active: 1 });
videoSchema.index({ title: "text", description: "text", topics: "text" });

module.exports = mongoose.model("Video", videoSchema);
