import express from "express";
import {
  getTracks,
  getTrackById,
  sortTracks,
} from "../controllers/tracks.controller.js";

const router = express.Router();

router.get("/", getTracks);
router.get("/sorted", sortTracks);
router.get("/:id", getTrackById);

export default router;
