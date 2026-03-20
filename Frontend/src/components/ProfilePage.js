import React, { useEffect, useState } from "react";

function ProfilePage() {
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
    <div className="container">
      <h2 className="title">Profile Card</h2>

      <div className="card profile-page-card">
        <div className="profile-avatar large-avatar">
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
    </div>
  );
}

export default ProfilePage;