const mongoose = require("mongoose");

const lessonOverrideSchema = new mongoose.Schema(
  {
    courseId: { type: String, required: true, index: true },
    lessonId: { type: String, required: true },
    title: String,
    description: String,
    level: String,
    estimatedTime: String,
    objectives: [String],
    exampleCode: String,
    challengeInstructions: String,
    starterCode: String,
    quizQuestion: String,
    quizOptions: [String],
    quizAnswer: String,
    sections: mongoose.Schema.Types.Mixed,
    active: { type: Boolean, default: true },
    updatedBy: String,
  },
  { timestamps: true }
);

lessonOverrideSchema.index({ courseId: 1, lessonId: 1 }, { unique: true });

module.exports = mongoose.model("LessonOverride", lessonOverrideSchema);
