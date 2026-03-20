import React, { useEffect, useState } from "react";

function BMI() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [status, setStatus] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("bmiHistory")) || [];
    setHistory(savedHistory);
  }, []);

  function calculate() {
    if (!height || !weight) {
      alert("Please enter height and weight");
      return;
    }

    const h = Number(height) / 100;
    const w = Number(weight);
    const result = w / (h * h);
    const bmiValue = result.toFixed(2);

    let bmiStatus = "";

    if (result < 18.5) bmiStatus = "Underweight";
    else if (result < 25) bmiStatus = "Normal";
    else if (result < 30) bmiStatus = "Overweight";
    else bmiStatus = "Obese";

    setBMI(bmiValue);
    setStatus(bmiStatus);

    const newEntry = {
      date: new Date().toLocaleDateString(),
      bmi: bmiValue,
      status: bmiStatus,
    };

    const updatedHistory = [newEntry, ...history].slice(0, 5);
    setHistory(updatedHistory);
    localStorage.setItem("bmiHistory", JSON.stringify(updatedHistory));
  }

  return (
    <div className="card">
      <h3>BMI Calculator</h3>

      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <button onClick={calculate}>Calculate BMI</button>

      {bmi && (
  <div className="advice-box">
    <strong>BMI:</strong> {bmi}
    <br />
    <strong>Status:</strong> {status}
  </div>
)}

      <div className="history-box">
        <h4>Saved BMI History</h4>

        {history.length === 0 ? (
          <p>No BMI history yet.</p>
        ) : (
          history.map((item, index) => (
            <div className="history-item" key={index}>
              <span>{item.date}</span>
              <span>BMI: {item.bmi}</span>
              <span>{item.status}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BMI;
