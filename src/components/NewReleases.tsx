import { useState } from 'react';
import { Play, Heart } from 'lucide-react';

// Importing local images
import OGImage from '../assets/Og.jpeg';
import DevaraImage from '../assets/Devara2.jpg';
import AkhandaImage from '../assets/Akhanda.jpeg';
import VishambaraImage from '../assets/Visvambara.jpeg';
import Kanappa from '../assets/Kanappa.jpeg';

const movies = [
  {
    id: 1,
    title: 'OG',
    duration: '2 Hr 30min',
    description: 'A highly anticipated action-packed Telugu movie.',
    image: OGImage,
  },
  {
    id: 2,
    title: 'Devara 2',
    duration: '2 Hr 40min',
    description: 'The epic sequel to the blockbuster Devara.',
    image: DevaraImage,
  },
  {
    id: 3,
    title: 'Akhanda 2',
    duration: '2 Hr 20min',
    description: 'The roaring return of Balayya in Akhanda 2.',
    image: AkhandaImage,
  },
  {
    id: 4,
    title: 'Vishambara',
    duration: '2 Hr 35min',
    description: 'A visually stunning Telugu sci-fi thriller.',
    image: VishambaraImage,
  },
  {
    id: 5,
    title: 'Kanappa',
    duration: '2 Hr 15min',
    description: 'Devotional but ROD movie',
    image: Kanappa,
  },
];

const NewReleases = () => {
  const [notifiedMovies, setNotifiedMovies] = useState([]);

  const handleNotify = (id) => {
    if (!notifiedMovies.includes(id)) {
      setNotifiedMovies([...notifiedMovies, id]);
    }
  };

  return (
    <section className="py-16 bg-gray-900"> {/* changed bg-black to bg-gray-900 */}
  <div className="container mx-auto px-4">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold text-gray-100">NEW RELEASES</h2>
      <a href="#" className="text-pink-600 hover:text-pink-700">
        Show all
      </a>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
          <div className="relative group">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-[250px] object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors">
                  <Play className="h-8 w-8 text-white" />
                </button>
              </div>
            </div>
            <button className="absolute top-4 right-4 p-2">
              <Heart className="h-6 w-6 text-pink-600" />
            </button>
            <div className="absolute bottom-4 left-4 text-white text-sm">
              {movie.duration}
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2 text-gray-100">{movie.title}</h3>
            <p className="text-gray-400 text-sm">{movie.description}</p>
            <button
              onClick={() => handleNotify(movie.id)}
              className={`w-full mt-4 border rounded-md py-2 transition-colors ${
                notifiedMovies.includes(movie.id)
                  ? 'bg-teal-600 text-white border-teal-600'
                  : 'text-teal-600 border-teal-600 hover:bg-teal-600 hover:text-white'
              }`}
            >
              {notifiedMovies.includes(movie.id) ? 'Notified' : 'Notify'}
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default NewReleases;
