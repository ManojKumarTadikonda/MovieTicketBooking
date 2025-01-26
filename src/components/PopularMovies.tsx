import { Play, Heart } from 'lucide-react';

const movies = [
  {
    id: 1,
    title: 'A Wednesday',
    duration: '1 Hr 4min',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 2,
    title: 'Commando-3',
    duration: '1 Hr 4min',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 3,
    title: 'Gujjubhai Most Wanted',
    duration: '1 Hr 4min',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 4,
    title: 'Avatar',
    duration: '1 Hr 4min',
    image: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&q=80&w=500',
  },
];

const PopularMovies = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">POPULAR MOVIES</h2>
          <a href="#" className="text-pink-600 hover:text-pink-700">
            Show all
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div key={movie.id} className="relative group">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-300"
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
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-lg">{movie.title}</h3>
                <p className="text-gray-600">{movie.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularMovies;