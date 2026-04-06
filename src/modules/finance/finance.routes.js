import express from "express";
import * as ctrl from "./finance.controller.js";
import { protect } from "../../middlewares/auth.middleware.js";
import { authorize } from "../../middlewares/role.middleware.js";

const router = express.Router();

router.post("/", protect, authorize("admin"), ctrl.createFinance);
router.get("/", protect, authorize("admin", "analyst", "viewer"), ctrl.getFinances);
router.put("/:id", protect, authorize("admin"), ctrl.updateFinance);
router.delete("/:id", protect, authorize("admin"), ctrl.deleteFinance);

export default router;