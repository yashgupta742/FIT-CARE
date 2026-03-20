import React, { useState } from "react";

// Workout recommendation based on BMI
function recommendWorkout(bmi) {
  if (bmi < 18.5) {
    return "You are underweight. Focus on strength training, weight lifting, and high-protein foods.";
  }

  if (bmi >= 18.5 && bmi <= 24.9) {
    return "You are fit. Maintain balance with cardio, strength training, and flexibility workouts.";
  }

  if (bmi >= 25 && bmi <= 29.9) {
    return "You are overweight. Focus on cardio exercises like running, cycling, and HIIT workouts.";
  }

  if (bmi >= 30) {
    return "Obesity level detected. Start with walking, light cardio, and controlled diet.";
  }

  return "";
}

// Diet recommendation based on BMI
function recommendDiet(bmi) {
  if (bmi < 18.5) {
    return "Diet Plan: Eat protein-rich foods like eggs, chicken, milk, nuts, and bananas. Increase calorie intake.";
  }

  if (bmi >= 18.5 && bmi <= 24.9) {
    return "Diet Plan: Balanced diet with vegetables, fruits, whole grains, and lean protein.";
  }

  if (bmi >= 25 && bmi <= 29.9) {
    return "Diet Plan: Reduce sugar and fried foods. Eat more vegetables, salads, and lean protein.";
  }

  if (bmi >= 30) {
    return "Diet Plan: Low calorie diet. Avoid junk food and sugary drinks. Focus on fiber and protein.";
  }

  return "";
}

function AITrainer() {
  const [issue, setIssue] = useState("");
  const [result, setResult] = useState("");
  const [bmi, setBmi] = useState("");
  const [workout, setWorkout] = useState("");
  const [diet, setDiet] = useState("");

  function getAdvice() {
    let advice = "";

    if (issue === "Stress")
      advice = "Practice meditation and deep breathing daily.";
    else if (issue === "Back Pain")
      advice = "Do light stretching and avoid long sitting.";
    else if (issue === "Knee Pain")
      advice = "Try leg stretches and avoid high-impact exercises.";
    else if (issue === "Obesity")
      advice = "Do cardio regularly and maintain a calorie-controlled diet.";
    else if (issue === "Sleep Problem")
      advice = "Do relaxation exercises and avoid screen time before sleep.";
    else
      advice = "Maintain regular workouts and a healthy diet.";

    setResult(advice);
  }

  function getBMIAdvice() {
    const bmiValue = Number(bmi);

    if (!bmi || isNaN(bmiValue) || bmiValue <= 0) {
      setWorkout("Please enter a valid BMI value.");
      setDiet("");
      return;
    }

    const workoutAdvice = recommendWorkout(bmiValue);
    const dietAdvice = recommendDiet(bmiValue);

    setWorkout(workoutAdvice);
    setDiet(dietAdvice);
  }

  return (
    <div className="card">
      <h2>AI Fitness Trainer</h2>

      <h3>Health Issue Advice</h3>

      <select value={issue} onChange={(e) => setIssue(e.target.value)}>
        <option value="">Select Issue</option>
        <option>Stress</option>
        <option>Back Pain</option>
        <option>Knee Pain</option>
        <option>Obesity</option>
        <option>Sleep Problem</option>
      </select>

      <br />

      <button onClick={getAdvice}>Get AI Advice</button>

      {result && <div className="advice-box">{result}</div>}

      <h3 style={{ marginTop: "30px" }}>BMI Based Recommendation</h3>

      <input
        type="number"
        placeholder="Enter your BMI"
        value={bmi}
        onChange={(e) => setBmi(e.target.value)}
      />

      <br />

      <button onClick={getBMIAdvice}>Get Fitness Recommendation</button>

      {workout && (
        <div className="trainer-result-box">
          <h4>Workout Recommendation</h4>
          <p>{workout}</p>
        </div>
      )}

      {diet && (
        <div className="trainer-result-box">
          <h4>Diet Recommendation</h4>
          <p>{diet}</p>
        </div>
      )}
    </div>
  );
}

export default AITrainer;