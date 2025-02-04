import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";

const showtimes = [
  { id: 1, time: "10:00 AM", screen: "MGB MALL NELLORE" },
  { id: 2, time: "1:30 PM", screen: "MGB MALL NELLORE" },
  { id: 3, time: "4:45 PM", screen: "MGB MALL NELLORE" },
  { id: 4, time: "8:00 PM", screen: "MGB MALL NELLORE" },
  { id: 5, time: "10:15 AM", screen: "Rain Square theatre" },
  { id: 6, time: "1:45 PM", screen: "Rain Square theatre" },
  { id: 7, time: "5:00 PM", screen: "Rain Square theatre" },
  { id: 8, time: "8:15 PM", screen: "Rain Square theatre" },
];

const SEAT_PRICE = 200;
const CONVENIENCE_FEE = 30;

const BookingPage = ({ movieId, movieName, userId }: { movieId: string, movieName: string, userId: string }) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  const generateSeatsMGB = () => {
    const rows = ["A", "B", "C", "D", "E", "F"]; // 6 rows for MGB MALL NELLORE
    const seatsPerRow = 10; // 10 seats per row
    return rows.flatMap((row) =>
      Array.from({ length: seatsPerRow }, (_, i) => `${row}${i + 1}`)
    );
  };

  const generateSeatsRainSquare = () => {
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"]; // 8 rows for Rain Square theatre
    const seatsPerRow = 12; // 12 seats per row
    return rows.flatMap((row) =>
      Array.from({ length: seatsPerRow }, (_, i) => `${row}${i + 1}`)
    );
  };

  const handleSeatClick = (seat: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const getSeatColor = (seat: string) => {
    if (selectedSeats.includes(seat))
      return "bg-gradient-to-r from-blue-600 to-purple-600 text-white";
    return "bg-gray-200 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white";
  };

  const totalAmount = selectedSeats.length * SEAT_PRICE + CONVENIENCE_FEE;

  const submitBooking = async () => {
    if (!selectedDate || !selectedTime || selectedSeats.length === 0) {
      alert("Please complete the booking details.");
      return;
    }

    const selectedShowtime = showtimes.find(
      (showtime) => showtime.id === selectedTime
    );

    if (!selectedShowtime) {
      alert("Invalid showtime selected.");
      return;
    }

    const bookingData = {
      userId,
      movieId,
      movieName,
      selectedDate,
      showTime: selectedShowtime.time,
      screenName: selectedShowtime.screen,
      seatPosition: selectedSeats.join(", "),
      amount: selectedSeats.length * SEAT_PRICE,
      payment: "done", // You can change this based on the payment process
    };

    try {
      const response = await fetch("http://localhost:5000/api/tickets/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Booking successful!");
        // Optionally redirect to another page after successful booking
        console.log(data);
      } else {
        alert("Booking failed.");
      }
    } catch (error) {
      console.error("Error booking ticket:", error);
      alert("An error occurred while booking the ticket.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100">
      <div className="container mx-auto px-4 py-12 overflow-y-auto mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-center mb-6">
            Book Your Tickets for {movieName} 🎥
          </h1>

          {/* Date Selection */}
          <section
            aria-labelledby="date-selection"
            className="mb-10 bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <h2 id="date-selection" className="text-2xl font-semibold mb-6">
              Select Date
            </h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {[...Array(7)].map((_, index) => {
                const date = new Date();
                date.setDate(date.getDate() + index);
                const dateStr = date.toISOString().split("T")[0];
                return (
                  <button
                    key={dateStr}
                    onClick={() => setSelectedDate(dateStr)}
                    className={`flex flex-col items-center p-4 rounded-lg min-w-[100px] transition-all duration-300 ${
                      selectedDate === dateStr
                        ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    <Calendar className="h-6 w-6 mb-2" />
                    <span className="text-sm">
                      {date.toLocaleDateString("en-US", { weekday: "short" })}
                    </span>
                    <span className="text-lg font-bold">{date.getDate()}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Time Selection */}
          {selectedDate && (
            <section
              aria-labelledby="time-selection"
              className="mb-10 bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h2 id="time-selection" className="text-2xl font-semibold mb-6">
                Select Showtime
              </h2>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">MGB MALL NELLORE</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {showtimes
                      .filter((showtime) => showtime.screen === "MGB MALL NELLORE")
                      .map((showtime) => (
                        <button
                          key={showtime.id}
                          onClick={() => setSelectedTime(showtime.id)}
                          className={`flex flex-col items-center p-6 rounded-lg shadow-lg transition-all duration-300 ${
                            selectedTime === showtime.id
                              ? "bg-gradient-to-br from-green-600 to-blue-600 text-white"
                              : "bg-gray-700 hover:bg-gray-600"
                          }`}
                        >
                          <Clock className="h-6 w-6 mb-2" />
                          <span className="text-lg font-bold">{showtime.time}</span>
                        </button>
                      ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Rain Square theatre</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {showtimes
                      .filter((showtime) => showtime.screen === "Rain Square theatre")
                      .map((showtime) => (
                        <button
                          key={showtime.id}
                          onClick={() => setSelectedTime(showtime.id)}
                          className={`flex flex-col items-center p-6 rounded-lg shadow-lg transition-all duration-300 ${
                            selectedTime === showtime.id
                              ? "bg-gradient-to-br from-green-600 to-blue-600 text-white"
                              : "bg-gray-700 hover:bg-gray-600"
                          }`}
                        >
                          <Clock className="h-6 w-6 mb-2" />
                          <span className="text-lg font-bold">{showtime.time}</span>
                        </button>
                      ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Seat Selection */}
          {selectedTime && (
            <section
              aria-labelledby="seat-selection"
              className="mb-10 bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h2 id="seat-selection" className="text-2xl font-semibold mb-6">
                Select Seats
              </h2>
              <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
                {generateSeatsMGB().map((seat) => (
                  <button
                    key={seat}
                    onClick={() => handleSeatClick(seat)}
                    className={`p-4 rounded-lg transition-all duration-300 ${
                      getSeatColor(seat)
                    }`}
                  >
                    {seat}
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Total & Payment */}
          {selectedSeats.length > 0 && (
            <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-12">
              <h2 className="text-2xl font-semibold mb-4">Booking Summary</h2>
              <p>
                <strong>Seats: </strong>
                {selectedSeats.join(", ")}
              </p>
              <p>
                <strong>Total: </strong>
                ₹{totalAmount}
              </p>
              <button
                onClick={submitBooking}
                className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
              >
                Proceed to Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
