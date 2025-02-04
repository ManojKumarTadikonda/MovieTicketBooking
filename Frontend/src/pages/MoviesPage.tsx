import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import Trailers from '../components/Trailers';
import pushpa2 from '../assets/pushpa2.jpeg';
import salaar from '../assets/salaar.jpg';
import kalki from '../assets/Kalki.jpg';
import DevaraImage from '../assets/Devara.jpeg';
//SD
const movies = [
  {
    id: 1,
    title: 'Pushpa 2',
    duration: '3 Hr 40min',
    image: pushpa2,
    description: 'The continuation of Pushpa Raj\'s journey in the dangerous world of red sandalwood smuggling.',
    rating: 4.8,
    reviews: [
      { id: 1, user: 'Ram C.', rating: 5, comment: 'Mind-blowing action , Allu Arjun\'s Mass!' },
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

  const viewscreen1 = () => {
    window.open('/screen1', '_blank');
  };
  const viewscreen2 = () => {
    window.open('http://127.0.0.1:8080/Movie_Threater.html', '_blank'); // Opens the link in a new tab
  };

  return (
    <div className="pt-16">
      <Trailers />
      <div className="flex justify-center space-x-4 mt-4">
        <button onClick={() => viewscreen1()} className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <span>View 3D Model of Screen 1</span>
        </button>
        <button onClick={() => viewscreen2()} className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <span>View 3D Model of Screen 2</span>
        </button>
      </div>
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
