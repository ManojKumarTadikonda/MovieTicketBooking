import { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import TrailerModal from './TrailerModal';

const trailers = [
  {
    id: 1,
    title: 'Inception',
    thumbnail: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=1600',
    videoUrl: 'https://www.youtube.com/embed/YoHD9XEInc0',
    duration: '2:32',
    releaseDate: 'Jan 24, 2024',
  },
  {
    id: 2,
    title: 'The Dark Knight',
    thumbnail: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1600',
    videoUrl: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    duration: '2:15',
    releaseDate: 'Feb 15, 2024',
  },
  {
    id: 3,
    title: 'Interstellar',
    thumbnail: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1600',
    videoUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    duration: '2:45',
    releaseDate: 'Mar 1, 2024',
  },
  {
    id: 4,
    title: 'Avatar',
    thumbnail: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?auto=format&fit=crop&q=80&w=1600',
    videoUrl: 'https://www.youtube.com/embed/5PSNL1qE6VY',
    duration: '2:20',
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