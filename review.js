import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const MovieReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const movie = {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    releaseYear: 1994,
    description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. The Shawshank Redemption is a story of hope, friendship, and the resilience of the human spirit.",
    posterUrl: "https://source.unsplash.com/400x600/?movie",
  };

  const handleRating = (index) => {
    setRating(index);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <Card className="max-w-3xl w-full p-4 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            className="rounded-lg w-full md:w-1/3 mb-4 md:mb-0 object-cover"
          />
          <CardContent className="flex flex-col justify-between md:ml-6">
            <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>
            <p className="text-sm text-gray-600">Directed by: {movie.director}</p>
            <p className="text-sm text-gray-600">Released: {movie.releaseYear}</p>
            <p className="mt-4 text-base text-gray-800">{movie.description}</p>
          </CardContent>
        </div>
        <div className="mt-6 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Rate this Movie</h2>
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <button
                key={index}
                className={`p-1 rounded-full transition-colors ${
                  (hover || rating) > index ? "text-yellow-400" : "text-gray-400"
                }`}
                onClick={() => handleRating(index + 1)}
                onMouseEnter={() => setHover(index + 1)}
                onMouseLeave={() => setHover(null)}
              >
                <Star size={24} />
              </button>
            ))}
          </div>
          <p className="mt-2 text-gray-600 text-sm">
            {rating > 0
              ? `You rated this movie ${rating} ${rating > 1 ? "stars" : "star"}!`
              : "Click a star to rate this movie."}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default MovieReviewPage;
