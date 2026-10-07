function configuredAdminEmails() {
  return String(process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
}

function isAdministrator(user) {
  if (!user) return false;
  return user.role === "admin"
    || configuredAdminEmails().includes(String(user.email || "").toLowerCase());
}

module.exports = {
  configuredAdminEmails,
  isAdministrator,
};
