import express from "express";
import * as surpriseController from "./surprise.controller.js";

const router = express.Router();

router.post("/", surpriseController.generateResponse);

export default router;
