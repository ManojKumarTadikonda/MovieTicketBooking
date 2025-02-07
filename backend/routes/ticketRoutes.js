const express = require('express');
const { bookTicket, getUserTickets,getBookedSeats } = require('../controllers/ticketController');
const router = express.Router();

router.get('/getseats',getBookedSeats);
router.post('/book', bookTicket);
// router.get('/user/:userId', getUserTickets);

module.exports = router;
