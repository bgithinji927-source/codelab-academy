const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    xp: {
      type: Number,
      default: 0,
    },

    level: {
      type: Number,
      default: 1,
    },

    completedLessons: {
      type: Number,
      default: 0,
    },

    // ============================================
    // NEW: LESSON PROGRESS TRACKING
    // ============================================

    currentCourse: {
      id: String,
      title: String,
    },

    currentLesson: {
      id: String,
      title: String,
      index: Number,
      completed: {
        type: Boolean,
        default: false,
      },
    },

    courseProgress: [
      {
        courseId: String,
        courseTitle: String,
        lessonsCompleted: {
          type: Number,
          default: 0,
        },
        totalLessons: Number,
        lastLessonIndex: Number,
        completedLessonIds: [String],
        lastAccessedAt: Date,
      },
    ],

    lessonSessions: [
      {
        courseId: String,
        lessonId: String,
        lessonIndex: Number,
        conversationHistory: [
          {
            role: String,
            content: String,
            timestamp: Date,
          },
        ],
        startedAt: Date,
        lastAccessedAt: Date,
        completed: {
          type: Boolean,
          default: false,
        },
        completedAt: Date,
        summary: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
