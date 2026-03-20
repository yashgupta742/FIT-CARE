import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Dashboard from "./components/Dashboard";
import BMI from "./components/BMI";
import AITrainer from "./components/AITrainer";
import Progress from "./components/Progress";
import Recommendation from "./components/Recommendation";
import ChatbotPage from "./components/ChatbotPage";
import ProfilePage from "./components/ProfilePage";
import WorkoutPlans from "./components/WorkoutPlans";

function AppLayout() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  let pageClass = "page-dashboard";

  if (location.pathname === "/" || location.pathname === "/dashboard") {
    pageClass = "page-dashboard";
  } else if (location.pathname === "/bmi") {
    pageClass = "page-bmi";
  } else if (location.pathname === "/trainer") {
    pageClass = "page-trainer";
  } else if (location.pathname === "/chatbot") {
    pageClass = "page-chatbot";
  } else if (location.pathname === "/recommendation") {
    pageClass = "page-recommendation";
  } else if (location.pathname === "/progress") {
    pageClass = "page-progress";
  } else if (location.pathname === "/profile") {
    pageClass = "page-profile";
  } else if (location.pathname === "/plans") {
    pageClass = "page-plans";
  }

  return (
    <div className={`app-shell ${darkMode ? "dark-theme" : "light-theme"} ${pageClass}`}>
      <ScrollToTop />
      <Navbar />
      <div className="dev-badge">
  Developed by <span>Yash Gupta</span>
</div>

      <div className="layout">
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bmi" element={<BMI />} />
            <Route path="/trainer" element={<AITrainer />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/recommendation" element={<Recommendation />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/plans" element={<WorkoutPlans />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;

