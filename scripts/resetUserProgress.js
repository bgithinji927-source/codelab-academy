const mongoose = require("mongoose");
const path = require("path");

// Ensure we can require the User model relative to the repo root
const User = require(path.join(__dirname, "..", "server", "models", "User"));

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("ERROR: Set MONGODB_URI environment variable before running this script.");
    process.exit(1);
  }

  console.log("Connecting to MongoDB...");
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Conservative filter: target users with unusually high XP or missing/empty courseProgress
    // Adjust this filter if you want different selection criteria.
    const filter = {
      $or: [
        { xp: { $gt: 1000 } },
        { courseProgress: { $exists: false } },
        { courseProgress: { $size: 0 } },
      ],
    };

    const update = {
      $set: {
        xp: 0,
        level: 1,
        completedLessons: 0,
        courseProgress: [],
        lessonSessions: [],
      },
    };

    console.log("Running migration with filter:", JSON.stringify(filter));

    const res = await User.updateMany(filter, update);

    // For compatibility with different mongoose driver response shapes
    const modified = res.modifiedCount ?? res.nModified ?? (res.ok && res.n ? res.n : undefined);

    console.log("Migration completed. Modified count:", modified);
  } catch (err) {
    console.error("Migration failed:", err);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
