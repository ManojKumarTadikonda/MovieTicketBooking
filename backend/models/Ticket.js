const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  movieId:{type:String,required:true},
  movieName:{type:String,required:true},
  selectedDate: { type: String, required: true },
  showTime: { type: String, required: true },
  screenName: { type: String, required: true },
  seatPosition: { type: [String], required: true }, // e.g., ['A1', 'A2']
  amount: { type: Number, required: true },
  payment: { type: String, enum: ['done', 'pending'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('Ticket', TicketSchema);
