import express from "express";
import { imageGenerateController } from "../controllers/imageGenerateController/imageGenerateController.js";
const router = express.Router();

router.post("/generator", imageGenerateController)
export default router;