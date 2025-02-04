const Ticket = require('../models/Ticket');

// Book a ticket
exports.bookTicket = async (req, res) => {
  try {
    const { userId,movieId,movieName ,selectedDate, showTime, screenName, seatPosition, amount, payment } = req.body;

    if (!userId ||!movieId ||!movieName|| !selectedDate || !showTime || !screenName || !seatPosition || !amount || !payment) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newTicket = new Ticket({ userId,movieId,movieName, selectedDate, showTime, screenName, seatPosition, amount, payment });
    await newTicket.save();

    res.status(201).json({ message: 'Ticket booked successfully', ticket: newTicket });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all tickets for a user
exports.getUserTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ userId: req.params.userId });
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
