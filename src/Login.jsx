*** Begin Patch
*** Update File: src/Login.jsx
@@
-      if (data.success) {
-        setMessage("Login successful! 🎉");
-
-        localStorage.setItem(
-          "codelabUser",
-          JSON.stringify(data.user)
-        );
-
-        if (onLoginSuccess) {
-          onLoginSuccess(data.user);
-        }
-      } else {
-        setMessage(data.message || "Login failed");
-      }
+      if (data.success) {
+        setMessage("Login successful! 🎉");
+
+        if (data.token) {
+          localStorage.setItem("codelabToken", data.token);
+        }
+
+        localStorage.setItem("codelabUser", JSON.stringify(data.user));
+
+        if (onLoginSuccess) {
+          onLoginSuccess(data.user);
+        }
+      } else {
+        setMessage(data.message || "Login failed");
+      }
*** End Patch
