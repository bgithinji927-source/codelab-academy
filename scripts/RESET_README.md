# Reset user progress migration

This script resets suspicious or empty user progress records to safe defaults (xp:0, level:1, empty courseProgress and lessonSessions).

Usage:

1. Make a backup of your database (DO NOT skip this).
2. Set MONGODB_URI in your environment to point to the database you want to modify.
3. Run:

   MONGODB_URI="your_mongodb_uri" node scripts/resetUserProgress.js

Notes:
- The script uses a conservative filter by default (xp > 1000 OR missing/empty courseProgress). Adjust the filter inside the script if you want different targeting.
- Review results and logs after running. Test on a staging copy before running in production.
