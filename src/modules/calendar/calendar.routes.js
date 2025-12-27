import express from "express";
import { getCalendar } from "./calendar.controller.js";

const router = express.Router();

router.get("/", getCalendar);

export default router;
