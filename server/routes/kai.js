*** Begin Patch
*** Update File: server/routes/kai.js
@@
-router.get(
-  "/session/:userId/:courseId/:lessonId",
-  async (req, res) => {
+router.get(
+  "/session/:userId/:courseId/:lessonId",
+  ensureAuth,
+  async (req, res) => {
     try {
       const { userId, courseId, lessonId } =
         req.params;
 
-      const user = await User.findById(userId);
+      const callerId = req.user?.id;
+
+      if (callerId && String(callerId) !== String(userId)) {
+        return res.status(403).json({ success: false, message: "Forbidden" });
+      }
+
+      const user = await User.findById(userId);
       if (!user) {
         return res.status(404).json({
           success: false,
           message: "User not found",
         });
       }
*** End Patch
