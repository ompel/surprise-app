import express from "express";
import surpriseRoutes from "../modules/surprise/surprise.routes.js";
import statsRoutes from "../modules/stats/stats.routes.js";

const router = express.Router();

router.use("/surprise", surpriseRoutes);
router.use("/stats", statsRoutes);

export default router;
