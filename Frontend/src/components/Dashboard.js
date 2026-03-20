import React, { useState, useEffect } from "react";
import BMI from "./BMI";
import AITrainer from "./AITrainer";
import AIChatbot from "./AIChatbot";
import Recommendation from "./Recommendation";
import Progress from "./Progress";
import "../styles/dashboard.css";

function Dashboard() {

  const [profileName, setProfileName] = useState(
    localStorage.getItem("profileName") || "Yash Gupta"
  );

  const [profileGoal, setProfileGoal] = useState(
    localStorage.getItem("profileGoal") || "Better Health"
  );

  useEffect(() => {
    localStorage.setItem("profileName", profileName);
    localStorage.setItem("profileGoal", profileGoal);
  }, [profileName, profileGoal]);

  function updateProfile() {

    const newName = prompt("Enter your name:", profileName);
    const newGoal = prompt("Enter your fitness goal:", profileGoal);

    if (newName) setProfileName(newName);
    if (newGoal) setProfileGoal(newGoal);

  }

  return (

    <main className="dashboard-main">

      {/* HERO SECTION */}

      <section className="hero-section">

        <div className="hero-content">

          <p className="hero-badge">
            AI Powered Fitness • Smart Health Guidance
          </p>

          <h1 className="hero-title">
            Smart Health & Fitness Recommender
          </h1>

          <p className="hero-subtitle">
            BMI, AI advice, chatbot support, exercise videos,
            workout plans and progress tracking in one dashboard.
          </p>

        </div>

      </section>


      {/* STATS */}

      <section className="stats-row">

        <div className="stat-card">
          <h3>25+</h3>
          <p>Health Issues</p>
        </div>

        <div className="stat-card">
          <h3>AI</h3>
          <p>Smart Support</p>
        </div>

        <div className="stat-card">
          <h3>20+</h3>
          <p>Exercise Videos</p>
        </div>

        <div className="stat-card">
          <h3>100%</h3>
          <p>Mobile Ready</p>
        </div>

      </section>


      {/* PROFILE + WORKOUT */}

      <section className="profile-workout-row">

        <div className="profile-card">

          <div className="profile-avatar">

            {profileName
              .split(" ")
              .map((part) => part[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}

          </div>

          <h3>{profileName}</h3>

          <p>{profileGoal}</p>

          <div className="profile-meta">
            <span>🎯 Goal: {profileGoal}</span>
            <span>⚡ Mode: Active</span>
          </div>

          <button className="profile-btn" onClick={updateProfile}>
            Edit Profile
          </button>

        </div>


        <div className="workout-plan-card">

          <h3>Workout Plans</h3>

          <div className="workout-grid">

            <div className="workout-item">
              <div className="workout-icon">🔥</div>
              <div>
                <h4>Fat Burn</h4>
                <p>Cardio + HIIT routine</p>
              </div>
            </div>

            <div className="workout-item">
              <div className="workout-icon">🧘</div>
              <div>
                <h4>Stress Relief</h4>
                <p>Breathing + meditation</p>
              </div>
            </div>

            <div className="workout-item">
              <div className="workout-icon">🦵</div>
              <div>
                <h4>Knee Care</h4>
                <p>Stretch + mobility</p>
              </div>
            </div>

            <div className="workout-item">
              <div className="workout-icon">💤</div>
              <div>
                <h4>Sleep Reset</h4>
                <p>Relaxation routine</p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* FEATURES SECTION */}

      <section className="features-section">

        <BMI />

        <AITrainer />

        <AIChatbot />

        <Recommendation />

        <Progress />

      </section>

    </main>

  );

}

export default Dashboard;