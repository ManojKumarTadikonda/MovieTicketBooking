import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

const showtimes = [
  { id: 1, time: '10:00 AM', screen: 'Screen 1' },
  { id: 2, time: '1:30 PM', screen: 'Screen 2' },
  { id: 3, time: '4:45 PM', screen: 'Screen 1' },
  { id: 4, time: '8:00 PM', screen: 'Screen 3' },
];

const BookingPage = () => {
  const { movieId } = useParams();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const generateSeats = () => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const seatsPerRow = 10;
    const seats = [];

    for (const row of rows) {
      for (let i = 1; i <= seatsPerRow; i++) {
        seats.push(`${row}${i}`);
      }
    }

    return seats;
  };

  const handleSeatClick = (seat: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const getSeatColor = (seat: string) => {
    if (selectedSeats.includes(seat)) return 'bg-pink-600 text-white';
    return 'bg-gray-200 hover:bg-gray-300';
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Book Tickets</h1>

          {/* Date Selection */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Select Date</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {[...Array(7)].map((_, index) => {
                const date = new Date();
                date.setDate(date.getDate() + index);
                const dateStr = date.toISOString().split('T')[0];
                return (
                  <button
                    key={dateStr}
                    onClick={() => setSelectedDate(dateStr)}
                    className={`flex flex-col items-center p-4 rounded-lg min-w-[100px] ${
                      selectedDate === dateStr
                        ? 'bg-pink-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <Calendar className="h-5 w-5 mb-1" />
                    <span className="text-sm">
                      {date.toLocaleDateString('en-US', { weekday: 'short' })}
                    </span>
                    <span className="text-sm font-semibold">
                      {date.getDate()}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time Selection */}
          {selectedDate && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Select Time</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {showtimes.map((showtime) => (
                  <button
                    key={showtime.id}
                    onClick={() => setSelectedTime(showtime.id)}
                    className={`flex flex-col items-center p-4 rounded-lg ${
                      selectedTime === showtime.id
                        ? 'bg-pink-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <Clock className="h-5 w-5 mb-1" />
                    <span className="text-sm font-semibold">{showtime.time}</span>
                    <span className="text-xs">{showtime.screen}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Seat Selection */}
          {selectedTime && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Select Seats</h2>
              <div className="bg-gray-100 p-8 rounded-lg">
                {/* Screen */}
                <div className="w-full h-4 bg-gray-400 rounded mb-8 relative">
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-gray-600">
                    Screen
                  </span>
                </div>

                {/* Seats */}
                <div className="grid grid-cols-10 gap-2 max-w-3xl mx-auto">
                  {generateSeats().map((seat) => (
                    <button
                      key={seat}
                      onClick={() => handleSeatClick(seat)}
                      className={`w-8 h-8 rounded-t-lg ${getSeatColor(
                        seat
                      )} flex items-center justify-center text-sm font-medium transition-colors`}
                    >
                      {seat}
                    </button>
                  ))}
                </div>

                {/* Legend */}
                <div className="flex justify-center space-x-8 mt-8">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-200 rounded mr-2"></div>
                    <span className="text-sm">Available</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-pink-600 rounded mr-2"></div>
                    <span className="text-sm">Selected</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-400 rounded mr-2"></div>
                    <span className="text-sm">Booked</span>
                  </div>
                </div>
              </div>

              {/* Booking Summary */}
              {selectedSeats.length > 0 && (
                <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Selected Seats:</span>
                      <span>{selectedSeats.join(', ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tickets:</span>
                      <span>{selectedSeats.length} x ₹200</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Convenience Fee:</span>
                      <span>₹30</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Total Amount:</span>
                        <span>₹{selectedSeats.length * 200 + 30}</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-pink-600 text-white py-3 rounded-lg mt-4 hover:bg-pink-700 transition-colors">
                    Proceed to Payment
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;