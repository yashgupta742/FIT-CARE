import React from "react";

function WorkoutPlans() {
  const plans = [
    {
      icon: "🔥",
      title: "Fat Burn",
      desc: "Cardio + HIIT routine for calorie burning and stamina."
    },
    {
      icon: "🧘",
      title: "Stress Relief",
      desc: "Breathing exercises, meditation and stretching."
    },
    {
      icon: "🦵",
      title: "Knee Care",
      desc: "Joint-friendly mobility and light strengthening routine."
    },
    {
      icon: "💤",
      title: "Sleep Reset",
      desc: "Light evening relaxation and recovery workout."
    },
    {
      icon: "💪",
      title: "Muscle Gain",
      desc: "Strength training and progressive overload plan."
    },
    {
      icon: "🏃",
      title: "Beginner Fitness",
      desc: "Simple daily workout for new users."
    }
  ];

  return (
    <div className="container">
      <h2 className="title">Workout Plans</h2>

      <div className="card">
        <div className="workout-grid">
          {plans.map((plan, index) => (
            <div className="workout-item" key={index}>
              <div className="workout-icon">{plan.icon}</div>
              <div>
                <h4>{plan.title}</h4>
                <p>{plan.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkoutPlans;