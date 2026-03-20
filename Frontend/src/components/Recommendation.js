import React, { useEffect, useState } from "react";
import axios from "axios";

function Recommendation() {
  const [issues, setIssues] = useState([]);
  const [issue, setIssue] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    loadIssues();
  }, []);

  async function loadIssues() {
    try {
      setApiError("");
      const res = await axios.get("http://localhost:5000/api/exercises");
      const uniqueIssues = [...new Set(res.data.map((item) => item.issue_name))];
      setIssues(uniqueIssues);
    } catch (err) {
      console.log(err);
      setApiError("Backend not connected. Start server on port 5000.");
    }
  }

  async function getExercise() {
    if (!issue) {
      alert("Please select an issue");
      return;
    }

    try {
      setLoading(true);
      setApiError("");
      setData([]);

      const res = await axios.get("http://localhost:5000/api/exercises");
      const filtered = res.data.filter((item) => item.issue_name === issue);
      setData(filtered);

      if (filtered.length === 0) {
        setApiError("No exercise found for this issue.");
      }
    } catch (err) {
      console.log(err);
      setApiError("Could not load exercise data. Please check backend.");
    } finally {
      setLoading(false);
    }
  }

  function convert(url) {
    if (!url) return "";
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    if (url.includes("youtu.be/")) {
      const videoId = url.split("youtu.be/")[1];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }

  return (
    <div className="card">
      <h3>Exercise Recommendation</h3>

      <select value={issue} onChange={(e) => setIssue(e.target.value)}>
        <option value="">Select Issue</option>
        {issues.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      <button onClick={getExercise}>
        {loading ? "Loading..." : "Get Recommendation"}
      </button>

      {apiError && <div className="advice-box">{apiError}</div>}

      <div className="grid">
        {data.map((item, index) => (
          <div className="exercise-card" key={index}>
            <h4>{item.exercise}</h4>

            <iframe
              width="100%"
              height="220"
              src={convert(item.video_link)}
              title={`exercise-${index}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendation;