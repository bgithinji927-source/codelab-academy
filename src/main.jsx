import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import InstallPrompt from "./components/InstallPrompt.jsx";
import "./dark-theme.css";
import "./nonKaiAnimations.css";
import "./whitePurpleTypography.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <InstallPrompt />
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch((error) => {
      console.warn("CodeLab Academy offline support is unavailable:", error);
    });
  });
}
