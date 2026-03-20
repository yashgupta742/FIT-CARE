import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar({ darkMode, setDarkMode }) {
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h2>🏋️ FitCare</h2>
        <p>Premium Fitness Panel</p>
      </div>

      <div className="sidebar-menu">
        <Link
          to="/dashboard"
          className={`menu-item ${location.pathname === "/dashboard" || location.pathname === "/" ? "active-menu" : ""}`}
        >
          🏠 Dashboard
        </Link>

        <Link
          to="/bmi"
          className={`menu-item ${location.pathname === "/bmi" ? "active-menu" : ""}`}
        >
          📊 BMI Tracker
        </Link>

        <Link
          to="/trainer"
          className={`menu-item ${location.pathname === "/trainer" ? "active-menu" : ""}`}
        >
          🧠 AI Trainer
        </Link>

        <Link
          to="/chatbot"
          className={`menu-item ${location.pathname === "/chatbot" ? "active-menu" : ""}`}
        >
          💬 AI Chatbot
        </Link>

        <Link
          to="/recommendation"
          className={`menu-item ${location.pathname === "/recommendation" ? "active-menu" : ""}`}
        >
          🎥 Exercise Videos
        </Link>

        <Link
          to="/progress"
          className={`menu-item ${location.pathname === "/progress" ? "active-menu" : ""}`}
        >
          📈 Workout Progress
        </Link>

        <Link
          to="/profile"
          className={`menu-item ${location.pathname === "/profile" ? "active-menu" : ""}`}
        >
          👤 Profile Card
        </Link>

        <Link
          to="/plans"
          className={`menu-item ${location.pathname === "/plans" ? "active-menu" : ""}`}
        >
          🏋️ Workout Plans
        </Link>
      </div>

      <div className="theme-toggle-box">
        <p>Theme Mode</p>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;