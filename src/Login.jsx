import { useState } from "react";
import "./Login.css";

function Login({ onClose, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Login successful! 🎉");

        if (data.token) {
          localStorage.setItem("codelabToken", data.token);
        }

        localStorage.setItem(
          "codelabUser",
          JSON.stringify(data.user)
        );

        if (onLoginSuccess) {
          onLoginSuccess(data.user);
        }
      } else {
        setMessage(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Unable to connect to the server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-overlay">
      <div className="login-modal">

        {/* CLOSE BUTTON */}
        <button
          type="button"
          className="login-close"
          onClick={onClose}
          aria-label="Close login"
        >
          ×
        </button>

        {/* LOGO */}
        <div className="login-logo">
          <span className="code">code</span>
          <span className="lab">Lab</span>
        </div>

        <h2>Welcome Back 👋</h2>

        <p>
          Sign in to continue learning with Kai.
        </p>

        <form onSubmit={handleLogin}>

          <label htmlFor="login-email">
            Email
          </label>

          <input
            id="login-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />

          <label htmlFor="login-password">
            Password
          </label>

          <input
            id="login-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

        </form>

        {message && (
          <div
            className={`login-message ${
              message.includes("successful")
                ? "success"
                : "error"
            }`}
          >
            {message}
          </div>
        )}

      </div>
    </div>
  );
}

export default Login;
