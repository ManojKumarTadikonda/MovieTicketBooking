import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import Trailers from '../components/Trailers';

const movies = [
  {
    id: 1,
    title: 'Inception',
    duration: '2 Hr 28min',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=500',
    description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    rating: 4.8,
    reviews: [
      { id: 1, user: 'John D.', rating: 5, comment: 'Mind-bending masterpiece!' },
      { id: 2, user: 'Sarah M.', rating: 4.5, comment: 'Incredible visuals and story.' }
    ]
  },
  {
    id: 2,
    title: 'The Dark Knight',
    duration: '2 Hr 32min',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=500',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    rating: 4.9,
    reviews: [
      { id: 1, user: 'Mike R.', rating: 5, comment: 'Heath Ledger\'s performance is legendary!' },
      { id: 2, user: 'Emma S.', rating: 5, comment: 'Best superhero movie ever made.' }
    ]
  },
  {
    id: 3,
    title: 'Interstellar',
    duration: '2 Hr 49min',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=500',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    rating: 4.7,
    reviews: [
      { id: 1, user: 'David L.', rating: 4.5, comment: 'Visually stunning and emotionally powerful.' },
      { id: 2, user: 'Lisa K.', rating: 5, comment: 'A masterpiece of sci-fi cinema.' }
    ]
  },
  // Add more movies...
];

const MoviesPage = () => {
  const [filter, setFilter] = useState('all');

  return (
    <div className="pt-16">
      <Trailers />
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">All Movies</h1>
          <div className="flex space-x-4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-600"
            >
              <option value="all">All Movies</option>
              <option value="now-showing">Now Showing</option>
              <option value="coming-soon">Coming Soon</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} showReviews={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;