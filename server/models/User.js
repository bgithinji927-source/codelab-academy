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

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    appearancePreset: {
      type: String,
      enum: ["default", "midnight", "light", "cyber-purple", "matrix", "ocean", "sunset", "clean", "forest", "contrast"],
      default: "default",
    },

    designPreset: {
      type: String,
      enum: ["classic", "focus", "rail", "canvas"],
      default: "classic",
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

    dayStreak: {
      type: Number,
      default: 0,
    },

    coursesStarted: {
      type: Number,
      default: 0,
    },

    badges: {
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
        startedAt: Date,
        lastAccessedAt: Date,
        completedAt: Date,
        readinessStatus: {
          type: String,
          enum: ["not-reviewed", "ready", "needs-practice", "completed"],
          default: "not-reviewed",
        },
        readyForNextCourse: {
          type: Boolean,
          default: false,
        },
        readinessSummary: String,
        readyAt: Date,
        unlockedAt: Date,
        unlockedBy: {
          type: String,
          default: "kai",
        },
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
            video: {
              type: mongoose.Schema.Types.Mixed,
              default: null,
            },
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
    // - Stores the assigned challenge for a rolling 24-hour window
    // - date: ISO date string (YYYY-MM-DD) for display/audit
    // - challengeId: references the challenge bank id
    // - assignedAt, expiresAt, viewedAt, attempts, completed, closed
    // ============================================

    dailyChallenge: {
      date: String,
      challengeId: String,
      assignedAt: Date,
      expiresAt: Date,
      viewedAt: Date,
      viewTokenHash: String,
      viewRequestId: String,
      attempts: {
        type: Number,
        default: 0,
      },
      completed: {
        type: Boolean,
        default: false,
      },
      closed: {
        type: Boolean,
        default: false,
      },
      completedAt: Date,
      closedAt: Date,
      lastResult: {
        type: String,
        enum: ["correct", "incorrect", "closed"],
      },
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
