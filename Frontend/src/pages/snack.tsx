
import React, { useState, useEffect } from 'react';
import { X, Popcorn, Tag, Star, ChevronLeft, ChevronRight } from 'lucide-react';



import pushpa2 from '../assets/pushpa.jpg';
import kalki from '../assets/kalki.png';
import sankranthi from '../assets/sankranthi.jpg';
import devara from '../assets/devara.jpg';
import gamechanger from '../assets/game.jpg';
import daku from '../assets/daku.jpg';
import nachous from '../assets/nachos.jpg';
import coke from '../assets/coke.jpg';
import samosa from '../assets/somosa.jpg';
import pizza from '../assets/pizza.jpg';
import burger from '../assets/burger.jpg';
import drink from '../assets/Softdrinks.jpg';
import puff from '../assets/puff.jpg';
import peri from '../assets/peri.jpg';
import fries from '../assets/french.jpg';
import sprite from '../assets/sprite.jpg';
import hotdog from '../assets/hotdog.jpg';
import pop from '../assets/pop1.jpgjpg';

interface Movie {
id: number;
title: string;
poster: string;
rating: number;
genre: string;
}

interface Snack {
id: number;
name: string;
price: number;
discountedPrice: number;
image: string;
description: string;
}

const bannerImages = [
{
url: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&q=80&w=1200",
title: "Movie Night Combos",
subtitle: "Save up to 30% on snack combos"
},
{

url: "https://images.unsplash.com/photo-1572177191856-3cde618dee1f?auto=format&fit=crop&q=80&w=1200",
title: "Fresh Popcorn",
subtitle: "Freshly popped for every show"
},
{
url: "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&q=80&w=1200",
title: "Sweet Treats",
subtitle: "Indulge in our dessert selection"
},
{
url: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&q=80&w=1200",
title: "Savory Snacks",
subtitle: "Perfect movie-time bites"
}
];

const movies: Movie[] = [
{
id: 1,
title: "Kalki",
poster: kalki,
rating: 4.5,
genre: "Action"
},
{
id: 2,
title: "Pushpa2",
poster:pushpa2,
rating: 3.5,
genre: "Action drama"
},
{
id: 3,
title: "Sankranthiki vastunnam",
poster:sankranthi,
rating: 4.6,
genre: "Comedy"
},
{
id: 4,
title: "Game changer",
poster:gamechanger,
rating:3,
genre: "Political action drama"
},
{
id: 5,
title: "Dakumaharaj",
poster: daku,
rating: 4.6,
genre: "Tragic action drama"
},
{
id: 6,
title: "Devara",
poster: devara,
rating: 4.4,
genre: "Action drama"
}
];

const snacksByMovie: Record<number, Snack[]> = {
1: [
{
id: 1,
name: "Desert Spice Popcorn Combo",
price: 50.00,
discountedPrice:45.00,
image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&q=80&w=800",
description: "Large spiced popcorn with drink of your choice"
},
{
id: 2,
name: "Nachous ",
price: 30.00,
discountedPrice:25,
image: nachous,
description: "🔥 Get Extra Cheese Free!,🌮 Nachos + Soda Combo for $6.99",
}
],
2: [
{
id: 3,
name: "Coke",
price: 30,
discountedPrice:25,
image: coke,
description: "🥤 Buy Any Large Drink & Get a Free Refill!"
},
{
id: 4,
name: "Pizza",
price:130,
discountedPrice:110,
image:pizza,
description: "🍕 Free Garlic Bread with Large Pizza"
}
],
3: [
{
id: 5,
name: "French fries",
price:150,
discountedPrice:120,
image:fries,
description: "🍟 Free Extra Fries with Any Large Order!"
},
{
id: 6,
name: "Hotdog",
price:100,
discountedPrice:90,
image: hotdog,
description: "🥟 Get extra one hotdog on purchasing 4 hotdogs!!!"
}
],
4: [
{
id: 7,
name: "Samosa",
price:20,
discountedPrice:10,
image:samosa,
description: "🥟 10% Off on Every Samosa Order After 10 PM!"
},
{
id: 8,
name: "Drive-In Burger Combo",
price:110,
discountedPrice:90,
image:burger,
description: "Mini burgers with fries and drink"
}
],
5: [
{
id: 9,
name: "Special cooldrinks",
price:50,
discountedPrice:45,
image: drink,
description: "🧊 Ice Cold Soda at Just $2"
},
{
id: 10,
name: "Peri-Peri",
price:60,
discountedPrice:50,
image:peri,
description: "🍟Get 25% on Peri-peri"
}
],
6: [
{
id: 11,
name: "Puffs",
price:30,
discountedPrice:20,
image:puff,
description: "Extra 100g free "
},
{
id: 12,
name: "Refreshing Sprite",
price:30,
discountedPrice:25,
image: sprite,
description: "🥤Buy 1liter sprite and get 250ml sprite"
}
]
};

function App() {
const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
const [currentBanner, setCurrentBanner] = useState(0);
const [isAutoPlaying, setIsAutoPlaying] = useState(true);

useEffect(() => {
if (isAutoPlaying) {
const timer = setInterval(() => {
setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
}, 5000);
return () => clearInterval(timer);
}
}, [isAutoPlaying]);

const nextBanner = () => {
setIsAutoPlaying(false);
setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
};

const prevBanner = () => {
setIsAutoPlaying(false);
setCurrentBanner((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
};

return (


<div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-gray-800 to-gray-700 py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Popcorn className="w-10 h-10 text-yellow-300 animate-bounce" />
              <h1 className="text-3xl font-bold tracking-tight">MovieSnacks</h1>
            </div>
          </div>
        </div>
      </header>

  {/* Main Content */}
  <main className="container mx-auto px-4 py-8">
    {selectedMovie ? (
      <div className="space-y-8 animate-fadeIn">
        {/* Back Button and Movie Info */}
        <div className="flex items-start justify-between bg-pink/10 p-6 rounded-2xl backdrop-blur-sm">
          <button
            onClick={() => setSelectedMovie(null)}
            className="flex items-center space-x-2 text-pink-300 hover:text-pink-200 transition-colors"
          >
            <X size={24} />
            <span className="font-medium">Back to Movies</span>
          </button>
          <div className="text-right">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white-400 to-white-400 bg-clip-text text-transparent">
              {selectedMovie.title}
            </h2>
            <div className="flex items-center justify-end space-x-3 mt-2">
              <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              <span className="text-lg">{selectedMovie.rating}</span>
              <span className="text-pink-200">• {selectedMovie.genre}</span>
            </div>
          </div>
        </div>

        {/* Snacks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {snacksByMovie[selectedMovie.id]?.map((snack, index) => (
            <div 
              key={snack.id} 
              className="bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm transform hover:scale-105 transition-transform duration-300"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={snack.image}
                  alt={snack.name}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-purple-600 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                  Save {(snack.price - snack.discountedPrice).toFixed(2)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{snack.name}</h3>
                <p className="text-pink-200 text-sm mb-4">{snack.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Tag className="w-5 h-5 text-green-400" />
                    <div>
                      <span className="text-green-400 font-bold text-xl">{snack.discountedPrice}</span>
                      <span className="text-pink-200 line-through ml-2">{snack.price}</span>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-6 py-2 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <>
        {/* Banner Slideshow */}
        <div className="relative h-[400px] mb-12 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 flex transition-transform duration-500 ease-out"
               style={{ transform: `translateX(-${currentBanner * 100}%)` }}>
            {bannerImages.map((banner, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <img
                  src={banner.url}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                  <div className="max-w-xl">
                    <h2 className="text-4xl font-bold mb-2">{banner.title}</h2>
                    <p className="text-xl text-gray-200">{banner.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevBanner}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextBanner}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentBanner(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentBanner === index ? 'bg-white w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Now Showing
        </h2>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {movies.map((movie, index) => (
            <button
              key={movie.id}
              onClick={() => setSelectedMovie(movie)}
              className="group relative rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full aspect-[2/3] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/95 via-purple-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span>{movie.rating}</span>
                    <span className="text-pink-200">• {movie.genre}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </>
    )}
  </main>
</div>
);
}

export default App;


