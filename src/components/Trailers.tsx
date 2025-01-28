import { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import TrailerModal from './TrailerModal';
import Pushpa2 from '../assets/Pushpatr2.jpeg';
import Salaar from '../assets/salaar.jpg';
import Kalki from '../assets/Kalki.jpg';
import DevaraImage from '../assets/Devara.jpeg';

const trailers = [
  {
    id: 1,
    title: 'Pushpa 2',
    thumbnail: Pushpa2,
    videoUrl: 'https://www.youtube.com/embed/g3JUbgOHgdw',
    duration: '3 Hr 40min',
    releaseDate: 'Jan 24, 2024',
  },
  {
    id: 2,
    title: 'Salaar',
    thumbnail: Salaar,
    videoUrl: 'https://www.youtube.com/embed/4GPvYMKtrtI',
    duration: '2 Hr 50min',
    releaseDate: 'Feb 15, 2024',
  },
  {
    id: 3,
    title: 'Kalki',
    thumbnail: Kalki,
    videoUrl: 'https://www.youtube.com/embed/y1-w1kUGuz8',
    duration: '2 Hr 58min',
    releaseDate: 'Mar 1, 2024',
  },
  {
    id: 4,
    title: 'Devara',
    thumbnail: DevaraImage,
    videoUrl: 'https://www.youtube.com/embed/5cx7rvMvAWo',
    duration: '2 Hr 49min',
    releaseDate: 'Mar 15, 2024',
  },
];

const Trailers = () => {
  const [currentTrailer, setCurrentTrailer] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrailer, setSelectedTrailer] = useState<typeof trailers[0] | null>(null);

  const nextTrailer = () => {
    setCurrentTrailer((prev) => (prev + 1) % trailers.length);
  };

  const prevTrailer = () => {
    setCurrentTrailer((prev) => (prev - 1 + trailers.length) % trailers.length);
  };

  const openTrailer = (trailer: typeof trailers[0]) => {
    setSelectedTrailer(trailer);
    setIsModalOpen(true);
  };

  return (
    <section className="relative">
      {/* Background Trailer */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        <img
          src={trailers[currentTrailer].thumbnail}
          alt={trailers[currentTrailer].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <button
            onClick={() => openTrailer(trailers[currentTrailer])}
            className="bg-white/20 p-6 rounded-full hover:bg-white/30 transition-colors group"
          >
            <Play className="h-12 w-12 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
          <h2 className="text-4xl font-bold text-white mb-2">{trailers[currentTrailer].title}</h2>
          <div className="flex items-center space-x-4 text-gray-300">
            <span>{trailers[currentTrailer].duration}</span>
            <span>•</span>
            <span>Release: {trailers[currentTrailer].releaseDate}</span>
          </div>
        </div>
      </div>

      {/* Trailer Thumbnails */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent">
        <div className="container mx-auto px-4 py-8">
          <div className="relative">
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
              {trailers.map((trailer, index) => (
                <div
                  key={trailer.id}
                  className={`relative flex-shrink-0 cursor-pointer transition-transform ${
                    index === currentTrailer ? 'scale-105' : ''
                  }`}
                  onClick={() => setCurrentTrailer(index)}
                >
                  <div className="relative w-64 h-36 rounded-lg overflow-hidden">
                    <img
                      src={trailer.thumbnail}
                      alt={trailer.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                    {index === currentTrailer && (
                      <div className="absolute inset-0 border-2 border-pink-600 rounded-lg" />
                    )}
                  </div>
                  <h3 className="text-white mt-2 font-medium">{trailer.title}</h3>
                </div>
              ))}
            </div>
            <button
              onClick={prevTrailer}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              onClick={nextTrailer}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Trailer Modal */}
      <TrailerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={selectedTrailer?.videoUrl || ''}
        title={selectedTrailer?.title || ''}
      />
    </section>
  );
};

export default Trailers;
