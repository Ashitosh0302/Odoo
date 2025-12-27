import express from "express";
import { byTeam, byEquipment } from "./report.controller.js";

const router = express.Router();

router.get("/by-team", byTeam);
router.get("/by-equipment", byEquipment);

export default router;
