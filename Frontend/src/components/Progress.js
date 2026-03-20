import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Progress() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem("bmiHistory")) || [];
    setHistory(savedHistory.reverse());
  }, []);

  const labels = history.map((item) => item.date);
  const bmiValues = history.map((item) => Number(item.bmi));

  const data = {
    labels,
    datasets: [
      {
        label: "BMI History",
        data: bmiValues,
        borderColor: "#00c853",
        backgroundColor: "rgba(0, 200, 83, 0.2)",
        tension: 0.35,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: "Your BMI Progress Chart" },
    },
  };

  return (
    <div className="card">
      <h3>BMI Progress</h3>

      {history.length === 0 ? (
        <p>No BMI history yet. Calculate BMI to see your graph.</p>
      ) : (
        <Line data={data} options={options} />
      )}
    </div>
  );
}

export default Progress;