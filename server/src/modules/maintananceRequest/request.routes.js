import express from "express";
import * as controller from "./request.controller.js";

const router = express.Router();

router.post("/", controller.CREATE);
router.get("/kanban", controller.KANBAN);
router.patch("/:id/status", controller.UPDATE_STATUS);

export default router;

