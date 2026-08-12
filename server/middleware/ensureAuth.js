const jwt = require("jsonwebtoken");

module.exports = function ensureAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization || req.cookies?.token;
    if (!authHeader) {
      return res.status(401).json({ success: false, message: "Authentication required" });
    }

    // support "Bearer <token>" or raw token
    const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;

    const secret = process.env.JWT_SECRET || "devsecret";
    const payload = jwt.verify(token, secret);

    // attach minimal user info
    req.user = { id: payload.id };
    return next();
  } catch (err) {
    console.error("Auth middleware error:", err.message || err);
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};
