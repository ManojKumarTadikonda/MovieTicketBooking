import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import PopularMovies from './components/PopularMovies';
import NewReleases from './components/NewReleases';
import Footer from './components/Footer';
import MoviesPage from './pages/MoviesPage';
import BookingPage from './pages/BookingPage';
import ModelViewer from './components/ModelViewer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Carousel />
                <PopularMovies />
                <NewReleases />
                <div>
                  <button onClick={() => window.location.href='/screen1'}>View 3D Model of Screen1</button>
                  <button onClick={() => window.location.href='/screen2'}>View 3D Model of Screen2</button>
                </div>
              </main>
            }
          />
          <Route path="/screen1" element={<ModelViewer modelId="screen1" />} />
          <Route path="/screen2" element={<ModelViewer modelId="screen2" />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/booking" element={<BookingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
