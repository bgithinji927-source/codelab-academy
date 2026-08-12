---
name: Workflow startup detection
description: A Replit workflow can report a port timeout even when the Node server has started and serves requests.
---

When a workflow reports that it did not open its port, verify the process and endpoint directly before changing application port settings. In this project, the Express server binds to `0.0.0.0` on `PORT` (5000 by default), and direct health/root requests are the reliable readiness check.

**Why:** The workflow monitor timed out while startup logs showed the server listening, and a standalone process returned successful health and root responses.

**How to apply:** Check workflow logs, `ss`/`curl`, and avoid repeated restart loops or unrelated port changes when the server is already healthy.