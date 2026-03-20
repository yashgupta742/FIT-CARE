require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./db");
const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ OpenAI setup
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


// ================= EXISTING ROUTES =================

// Get all exercises
app.get("/api/exercises", (req, res) => {
  db.query("SELECT * FROM exercises", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Database error");
    }

    res.json(result);
  });
});

// Get exercises by issue
app.get("/api/exercises/:issue", (req, res) => {
  const issue = req.params.issue;

  db.query(
    "SELECT * FROM exercises WHERE issue_name = ?",
    [issue],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Database error");
      }

      res.json(result);
    }
  );
});


// ================= 🤖 AI CHAT ROUTE =================

app.post("/api/chat", async (req, res) => {
  try {
    const { question } = req.body;

    if (!question || !question.trim()) {
      return res.status(400).json({ error: "Question is required" });
    }

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: `
You are a smart fitness and health assistant for a website called FitCare.
Give clear, practical, beginner-friendly answers.
Keep answers short but useful.
If needed, give steps or tips.
Avoid medical diagnosis.
          `,
        },
        {
          role: "user",
          content: question,
        },
      ],
    });

    const answer =
      response.output_text || "Sorry, I could not generate a reply.";

    res.json({ answer });

  } catch (error) {
    console.error("AI error:", error);
    res.status(500).json({
      error: "AI response failed. Check API key or backend.",
    });
  }
});


// ================= SERVER =================

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});