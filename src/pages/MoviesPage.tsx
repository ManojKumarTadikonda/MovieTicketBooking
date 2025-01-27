import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import Trailers from '../components/Trailers';
import pushpa2 from '../assets/pushpa2.jpeg';
import salaar from '../assets/salaar.jpg';
import kalki from '../assets/Kalki.jpg';
import DevaraImage from '../assets/Devara.jpeg';

const movies = [
  {
    id: 1,
    title: 'Pushpa 2',
    duration: '3 Hr 40min',
    image: pushpa2,
    description: 'The continuation of Pushpa Raj\'s journey in the dangerous world of red sandalwood smuggling.',
    rating: 4.8,
    reviews: [
      { id: 1, user: 'Ram C.', rating: 5, comment: 'Mind-blowing action and Allu Arjun\'s top performance!' },
      { id: 2, user: 'Sita G.', rating: 4.5, comment: 'The visuals and dialogues are unforgettable!' }
    ],
  },
  {
    id: 2,
    title: 'Salaar',
    duration: '2 Hr 50min',
    image: salaar,
    description: 'Prabhas takes on the role of a mysterious rebel in this high-octane action movie.',
    rating: 4.9,
    reviews: [
      { id: 1, user: 'Arjun D.', rating: 5, comment: 'A visual treat with amazing stunts!' },
      { id: 2, user: 'Kriti J.', rating: 4.8, comment: 'Prabhas nailed it yet again in this blockbuster!' }
    ],
  },
  {
    id: 3,
    title: 'Kalki',
    duration: '2 Hr 58min',
    image: kalki,
    description: 'An epic drama showcasing the story of Kalki, a modern-day warrior with a gripping backstory.',
    rating: 4.7,
    reviews: [
      { id: 1, user: 'Lakshmi S.', rating: 4.5, comment: 'A mesmerizing movie with stunning storytelling.' },
      { id: 2, user: 'Raj V.', rating: 5, comment: 'Perfect mix of action and drama!' }
    ],
  },
  {
    id: 4,
    title: 'Devara',
    duration: '2 Hr 49min',
    image: DevaraImage,
    description: 'An emotional journey of revenge, redemption, and resilience.',
    rating: 4.6,
    reviews: [
      { id: 1, user: 'Arya P.', rating: 4.5, comment: 'Heartfelt and powerful story with Jr. NTR at his best!' },
      { id: 2, user: 'Mira D.', rating: 4.8, comment: 'Outstanding performance and gripping plot.' }
    ],
  },
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
