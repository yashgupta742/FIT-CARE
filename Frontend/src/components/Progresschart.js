import React from "react";
import { Line } from "react-chartjs-2";
import {
 Chart as ChartJS,
 CategoryScale,
 LinearScale,
 PointElement,
 LineElement,
 Title,
 Tooltip,
 Legend
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

function ProgressChart() {

 const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
   {
    label: "Calories Burned",
    data: [200, 350, 400, 300, 500, 450, 600],
    borderColor: "#ff9800",
    backgroundColor: "rgba(255,152,0,0.2)"
   }
  ]
 };

 return (
  <div style={{ width: "90%", margin: "auto" }}>
   <Line data={data} />
  </div>
 );
}

export default ProgressChart;