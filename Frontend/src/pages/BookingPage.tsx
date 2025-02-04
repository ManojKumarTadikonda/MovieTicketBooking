import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";

const showtimes = [
  { id: 1, time: "10:30 AM", screen: "MGB MALL NELLORE" },
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
  const [movieTitle, setMovieTitle] = useState<string>(""); // New state for movie title

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  const generateSeatsMGB = () => {
    const rows = ["A", "B", "C", "D", "E", "F","G"]; // 6 rows for MGB MALL NELLORE
    const seatsPerRow = 10; // 10 seats per row
    return rows.flatMap((row) =>
      Array.from({ length: seatsPerRow }, (_, i) => `${row}${i + 1}`)
    );
  };

  const generateSeatsRainSquare = () => {
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H"]; // 8 rows for Rain Square theatre
    const seatsPerRow = 12; // increased seats per row from 10 to 12
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
    return "bg-gray-300 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-white";
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
            Book Your Tickets 🎥
          </h1>

        {/* Date Selection */}
        <section
          aria-labelledby="date-selection"
          className="mb-8 bg-gray-200 p-4 rounded-lg shadow-md"
        >
          <h2 id="date-selection" className="text-xl font-bold text-black mb-4 animate-bounce">
            Select Date
          </h2>
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {[...Array(7)].map((_, index) => {
              const date = new Date();
              date.setDate(date.getDate() + index);
              const dateStr = date.toISOString().split("T")[0];
              return (
                <button
                  key={dateStr}
                  onClick={() => setSelectedDate(dateStr)}
                  className={`flex flex-col items-center p-2 rounded-lg min-w-[80px] transition-all duration-300 ${
                    selectedDate === dateStr
                      ? "bg-gradient-to-br from-blue-600 to-purple-600 text-white"
                      : "bg-gray-300 hover:bg-gray-200"
                  }`}
                >
                  <Calendar className="h-5 w-5 mb-1" />
                  <span className="text-xs">
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
                    {showtimes.filter(showtime => showtime.screen === "MGB MALL NELLORE").map((showtime) => (
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
                    {showtimes.filter(showtime => showtime.screen === "Rain Square theatre").map((showtime) => (
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
              <div className="bg-gray-900 p-8 rounded-lg">
                <div className="w-full h-2 bg-gray-600 rounded mb-10 relative">
                  <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-sm">
                    Screen
                  </span>
                </div>
                <div className="grid grid-cols-10 gap-3 max-w-3xl mx-auto">
                  {selectedTime && showtimes.find(showtime => showtime.id === selectedTime)?.screen === "MGB MALL NELLORE" ? generateSeatsMGB().map((seat) => (
                    <button
                      key={seat}
                      onClick={() => handleSeatClick(seat)}
                      className={`w-10 h-10 rounded-md flex items-center justify-center text-sm font-medium transition-all duration-300 ${getSeatColor(
                        seat
                      )}`}
                    >
                      {seat}
                    </button>
                  )) : generateSeatsRainSquare().map((seat) => (
                    <button
                      key={seat}
                      onClick={() => handleSeatClick(seat)}
                      className={`w-10 h-10 rounded-md flex items-center justify-center text-sm font-medium transition-all duration-300 ${getSeatColor(
                        seat
                      )}`}
                    >
                      {seat}
                    </button>
                  ))}
                </div>
                <div className="flex justify-center space-x-8 mt-8">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-gray-200 rounded mr-2"></div>
                    <span className="text-sm">Available</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded mr-2"></div>
                    <span className="text-sm">Selected</span>
                  </div>
                </div>
              </div>

              {selectedSeats.length > 0 && (
                <div className="mt-8 bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4">
                    Booking Summary
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Selected Seats:</span>
                      <span>{selectedSeats.join(", ")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tickets:</span>
                      <span>{selectedSeats.length} x ₹{SEAT_PRICE}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Convenience Fee:</span>
                      <span>₹{CONVENIENCE_FEE}</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Total Amount:</span>
                        <span>₹{totalAmount}</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg mt-6 hover:opacity-90 transition-opacity">
                    Proceed to Payment
                  </button>
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
