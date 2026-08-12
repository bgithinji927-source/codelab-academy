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
    // LESSON PROGRESS TRACKING
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

    // ============================================
    // DAILY CHALLENGE
    // - Stores the assigned challenge for the current day for this user
    // - date: ISO date string (YYYY-MM-DD)
    // - challengeId: references the challenge bank id
    // - assignedAt, attempts, completed, completedAt
    // ============================================

    dailyChallenge: {
      date: String,
      challengeId: String,
      assignedAt: Date,
      attempts: {
        type: Number,
        default: 0,
      },
      completed: {
        type: Boolean,
        default: false,
      },
      completedAt: Date,
      // optional: last submitted answer (stored for audit/feedback)
      lastAnswer: String,
    },

    // total number of daily challenges completed historically
    dailyChallengesCompleted: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
