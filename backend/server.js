// backend/index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Import your routes
import authRouter from "./routes/auth.route.js";
import healthdashboardRouter from "./routes/healthdashboard.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // frontend
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Gemini AI setup
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ✅ AI Chat Route
app.post("/api/ai/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // ⚡ fast model
    const result = await model.generateContent(message);

    const text = result.response.text();
    res.json({ response: text });
  } catch (error) {
    console.error("❌ Error communicating with Gemini:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ Other routes
app.use("/api/auth", authRouter);
app.use("/api/healthdashboard", healthdashboardRouter);

// ✅ Error middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// ✅ Start server
app.listen(3000, () => {
  console.log("🚀 Server is running on http://localhost:3000");
});
