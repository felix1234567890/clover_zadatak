import express from "express";
import tracksRoutes from "./tracks.routes.js";

const router = express.Router();

router.use("/tracks", tracksRoutes);

export default router;
