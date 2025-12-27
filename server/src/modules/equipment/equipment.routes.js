const express = require("express");
const controller = require("./equipment.controller");

const router = express.Router();

router.post("/", controller.CREATE);
router.get("/", controller.GET_ALL);

module.exports = router;
