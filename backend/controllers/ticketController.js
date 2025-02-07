const fs = require("fs");
const path = require("path");
const Ticket = require("../models/Ticket");
const { sendTicketQR } = require("../utils/emailService");

const qrDirectory = path.join(__dirname, "../qr_codes");
if (!fs.existsSync(qrDirectory)) {
  fs.mkdirSync(qrDirectory);
}

// 🎟️ Book Ticket and Generate QR Code
exports.bookTicket = async (req, res) => {
  try {
    const {
      userId,
      email, // Add email to send the QR
      movieId,
      movieName,
      selectedDate,
      showTime,
      screenName,
      seatPosition,
      amount,
      payment,
    } = req.body;
    console.log(req.body);
    if (
      !userId ||
      !email || // Ensure email is provided
      !movieId ||
      !movieName ||
      !selectedDate ||
      !showTime ||
      !screenName ||
      !seatPosition ||
      !amount ||
      !payment
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Create and save the ticket
    const newTicket = new Ticket({
      userId,
      movieId,
      movieName,
      selectedDate,
      showTime,
      screenName,
      seatPosition,
      amount,
      payment,
    });
    await newTicket.save();
console.log("1");
    // ✅ Call sendTicketQR function to send email with QR 🎟️
    await sendTicketQR({
      email,
      userId,
      movieName,
      selectedDate,
      showTime,
      screenName,
      seatPosition,
    });

    res.status(201).json({
      message: "Ticket booked successfully, QR sent to email",
      ticket: newTicket,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// 🎟️ Get All Booked Seats
exports.getBookedSeats = async (req, res) => {
  try {
    // Query the Ticket model to get all booked tickets
    const bookedTickets = await Ticket.find({});

    // Map through the tickets and collect all booked seat positions
    const bookedSeats = bookedTickets.map(ticket => ticket.seatPosition);

    res.status(200).json({
      message: "Booked seats retrieved successfully",
      bookedSeats,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
