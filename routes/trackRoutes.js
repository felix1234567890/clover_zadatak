const express = require("express");
const {
  getTracks,
  getTrackById,
  sortTracks,
} = require("../controllers/tracksController");

const router = express.Router();

router.get("/", getTracks);
router.get("/sorted", sortTracks);
router.get("/:id", getTrackById);

module.exports = router;
