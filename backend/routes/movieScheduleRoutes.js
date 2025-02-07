const express = require("express");
const MovieSchedule = require("../models/MovieSchedule");
const mongoose = require("mongoose");
const router = express.Router();


// Fetch All Schedules
router.get("/schedules", async (req, res) => {
  try {
    const schedules = await MovieSchedule.find();
    res.json(schedules);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


module.exports = router;
