import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { registerModules } from "./modules/index.js";

const app = express();

/* ---------- global middlewares ---------- */
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(morgan("dev"));

/* ---------- health check ---------- */
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "codeify-backend"
  });
});

registerModules(app);

export default app;
