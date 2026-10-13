const express = require("express");

const router = express.Router();

router.use("/tracks", require("./tracks.routes"));

module.exports = router;
