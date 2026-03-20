import React, { useState } from "react";
import axios from "axios";

function AIChatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  function getLocalReply(q) {
    const text = q.toLowerCase().trim();

    if (text.includes("weight loss") || text.includes("lose weight")) {
      return "For weight loss, focus on a calorie deficit, 30 to 45 minutes of walking or cardio, high-protein meals, less sugar, and proper sleep. Stay consistent for the best results.";
    }

    if (text.includes("gain weight") || text.includes("weight gain")) {
      return "For healthy weight gain, eat more calories than your body burns, include milk, banana, nuts, rice, paneer, eggs, and strength training 4 to 5 times a week.";
    }

    if (text.includes("muscle") || text.includes("gain muscle")) {
      return "To gain muscle, do strength training regularly, increase protein intake, sleep 7 to 8 hours, and follow progressive overload with proper recovery.";
    }

    if (text.includes("diet")) {
      return "A good fitness diet should include protein, fruits, vegetables, whole grains, healthy fats, and enough water. Avoid too much junk food and sugary drinks.";
    }

    if (text.includes("stress") || text.includes("anxiety")) {
      return "For stress relief, try deep breathing, meditation, light yoga, a daily walk, less screen time, and a proper sleep routine.";
    }

    if (text.includes("sleep") || text.includes("insomnia")) {
      return "For better sleep, avoid caffeine late in the day, reduce mobile use before bed, keep the room dark, and follow a fixed sleep schedule.";
    }

    if (text.includes("knee pain")) {
      return "For knee pain, avoid jumping and high-impact exercises. Try light stretching, quad strengthening, walking on flat surfaces, and consult a doctor if pain is severe.";
    }

    if (text.includes("back pain")) {
      return "For back pain, maintain correct posture, avoid heavy lifting, do gentle stretching, core exercises, and take medical advice if pain continues.";
    }

    if (text.includes("bmi")) {
      return "BMI helps estimate whether your weight is underweight, normal, overweight, or obese based on height and weight. It is useful, but not the only measure of fitness.";
    }

    if (text.includes("workout") || text.includes("exercise")) {
      return "A balanced workout plan includes warm-up, cardio, strength training, stretching, hydration, and rest days. Start slowly and increase intensity gradually.";
    }

    if (text.includes("water") || text.includes("hydration")) {
      return "Drink enough water throughout the day. Most people benefit from regular hydration, especially before and after workouts.";
    }

    return "Maintain a balanced diet, regular exercise, hydration, and proper sleep. For better fitness results, stay consistent and choose a routine that matches your goal.";
  }

  async function getReply() {
    if (!question.trim()) {
      alert("Please enter a question");
      return;
    }

    try {
      setLoading(true);
      setAnswer("");

      const res = await axios.post("http://localhost:5000/api/chat", {
        question,
      });

      if (res.data && res.data.answer) {
        setAnswer(res.data.answer);
      } else {
        setAnswer(getLocalReply(question));
      }
    } catch (err) {
      console.error("AI failed, using local reply:", err);
      setAnswer(getLocalReply(question));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <h3>AI Fitness Chatbot</h3>

      <input
        type="text"
        placeholder="Ask any fitness question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={getReply}>
        {loading ? "Thinking..." : "Ask AI"}
      </button>

      {answer && <div className="advice-box">{answer}</div>}
    </div>
  );
}

export default AIChatbot;