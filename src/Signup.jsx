import { useState } from "react";
import "./Login.css";

function Signup({ onClose, onSignupSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Account created! 🎉");
        localStorage.setItem("codelabUser", JSON.stringify(data.user));
        if (onSignupSuccess) onSignupSuccess(data.user);
      } else {
        setMessage(data.message || "Registration failed");
      }
    } catch (err) {
      console.error("Signup error:", err);
      setMessage("Unable to connect to the server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">

        <button type="button" className="login-close" onClick={onClose} aria-label="Close signup">×</button>

        <div className="login-logo">
          <span className="code">code</span>
          <span className="lab">Lab</span>
        </div>

        <h2>Create your account</h2>
        <p>Sign up to start learning with Kai.</p>

        <form onSubmit={handleSignup}>
          <label htmlFor="signup-name">Full name</label>
          <input id="signup-name" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />

          <label htmlFor="signup-email">Email</label>
          <input id="signup-email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />

          <label htmlFor="signup-password">Password</label>
          <input id="signup-password" type="password" placeholder="Choose a password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="new-password" />

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Creating account..." : "Get Started"}
          </button>
        </form>

        {message && (
          <div className={`login-message ${message.includes("created") || message.includes("Account") ? "success" : "error"}`}>
            {message}
          </div>
        )}

      </div>
    </div>
  );
}

export default Signup;
