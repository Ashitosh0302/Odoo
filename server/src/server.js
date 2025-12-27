import app from "./app.js";
import { connectDB } from "./config/db.js";

import http from "http";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

async function startServer() {
  try {
    await connectDB();
    server.listen(PORT, () => {
      console.log(`🚀 Server listening on port ${PORT}`);
    });

  } catch (err) {
    console.error("❌ Server startup failed:", err);
    process.exit(1);
  }
}

startServer();
