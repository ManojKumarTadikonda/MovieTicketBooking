import { Play, Heart } from 'lucide-react';

const movies = [
  {
    id: 1,
    title: 'OG',
    duration: '2 Hr 30min',
    description: 'A highly anticipated action-packed Telugu movie.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 2,
    title: 'Devara 2',
    duration: '2 Hr 40min',
    description: 'The epic sequel to the blockbuster Devara.',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 3,
    title: 'Akhanda 2',
    duration: '2 Hr 20min',
    description: 'The roaring return of Balayya in Akhanda 2.',
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 4,
    title: 'Vishambara',
    duration: '2 Hr 35min',
    description: 'A visually stunning Telugu sci-fi thriller.',
    image: 'https://images.unsplash.com/photo-1485841890310-6a055c88698a?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 5,
    title: 'ETV',
    duration: '2 Hr 15min',
    description: 'A drama-filled emotional rollercoaster.',
    image: 'https://images.unsplash.com/photo-1498772776854-5683a552f9e4?auto=format&fit=crop&q=80&w=500',
  },
];

const NewReleases = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">NEW RELEASES</h2>
          <a href="#" className="text-pink-600 hover:text-pink-700">
            Show all
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {movies.map((movie) => (
            <div key={movie.id} className="bg-white rounded-lg overflow-hidden shadow-md">
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
                <h3 className="font-semibold text-lg mb-2">{movie.title}</h3>
                <p className="text-gray-600 text-sm">{movie.description}</p>
                <button className="w-full mt-4 text-teal-600 border border-teal-600 rounded-md py-2 hover:bg-teal-600 hover:text-white transition-colors">
                  Watch now
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
