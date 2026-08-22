const User = require("../models/User");

function configuredAdminEmails() {
  return String(process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

module.exports = async function ensureAdmin(req, res, next) {
  try {
    if (!req.user?.id) {
      return res.status(401).json({ success: false, message: "Authentication required" });
    }

    const user = await User.findById(req.user.id).select("email role isActive").lean();
    if (!user || user.isActive === false) {
      return res.status(403).json({ success: false, message: "Active administrator account required" });
    }

    const isAdmin = user.role === "admin" || configuredAdminEmails().includes(String(user.email || "").toLowerCase());
    if (!isAdmin) {
      return res.status(403).json({ success: false, message: "Administrator access required" });
    }

    req.admin = user;
    return next();
  } catch (error) {
    console.error("Admin authorization error:", error);
    return res.status(500).json({ success: false, message: "Could not verify administrator access" });
  }
};
