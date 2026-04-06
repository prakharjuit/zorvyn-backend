import express from "express";
import { summary } from "./dashboard.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/summary", protect, summary);

export default router;