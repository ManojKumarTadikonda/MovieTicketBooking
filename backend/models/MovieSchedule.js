const mongoose = require("mongoose");

const movieScheduleSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,  // Unique ID for each schedule
  date: { type: String, required: true }, // Format: YYYY-MM-DD
  screen: { type: Number, required: true }, // Screen 1 or 2
  showTime: { type: String, required: true }, // Example: "11:00 AM"
  movieName: { type: String, required: true }, // Example: "Salaar"
  movieId: { type: String, required: true } 
});

module.exports = mongoose.model("MovieSchedule", movieScheduleSchema);
