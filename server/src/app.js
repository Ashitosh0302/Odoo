// src/app.js
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { registerModules } from "./modules/index.js";

const app = express();

/* ---------- Global Middlewares ---------- */
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(morgan("dev"));

/* ---------- Health Check ---------- */
app.get("/", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "codeify-backend",
    timestamp: new Date().toISOString(),
  });
});

/* ---------- Register API Modules ---------- */
registerModules(app);

/* ---------- 404 Handler ---------- */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

/* ---------- Global Error Handler ---------- */
app.use((err, req, res, next) => {
  console.error("❌ Error:", err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

export default app;
