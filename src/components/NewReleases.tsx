import { Play, Heart } from 'lucide-react';

const movies = [
  {
    id: 1,
    title: 'My Spy',
    duration: '2 Hr 4min',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 2,
    title: 'Scoob',
    duration: '2 Hr 4min',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    image: 'https://images.unsplash.com/photo-1568876694728-451bbf694b83?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 3,
    title: 'Downhill',
    duration: '2 Hr 4min',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    image: 'https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 4,
    title: 'No Time To Die',
    duration: '2 Hr 4min',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    image: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&q=80&w=500',
  },
  {
    id: 5,
    title: 'Mulan',
    duration: '2 Hr 4min',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=500',
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