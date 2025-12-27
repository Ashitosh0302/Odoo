import express from "express";
import * as controller from "./equipment.controller.js";

const router = express.Router();

router.post("/", controller.CREATE);
router.get("/", controller.GET_ALL);

export default router;
