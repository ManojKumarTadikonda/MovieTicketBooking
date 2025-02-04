import { Search, User, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AuthModal from './AuthModal';

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [activeMenu, setActiveMenu] = useState<string>('Home'); // New state for active menu

  const openAuthModal = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-pink-600">Vasu Cinemas</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`text-${activeMenu === 'Home' ? 'pink-600' : 'gray-600'}`} 
                onClick={() => setActiveMenu('Home')}
              >
                Home
              </Link>
              <Link 
                to="/movies" 
                className={`text-${activeMenu === 'Movies' ? 'pink-600' : 'gray-600'}`} 
                onClick={() => setActiveMenu('Movies')}
              >
                Movies
              </Link>
              <Link 
                to="/about" 
                className={`text-${activeMenu === 'About' ? 'pink-600' : 'gray-600'}`} 
                onClick={() => setActiveMenu('About')}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`text-${activeMenu === 'Contact' ? 'pink-600' : 'gray-600'}`} 
                onClick={() => setActiveMenu('Contact')}
              >
                Contact
              </Link>
              <Link 
                to="/Snacks&Offers" 
                className={`text-${activeMenu === 'Snacks&Offers' ? 'pink-600' : 'gray-600'}`} 
                onClick={() => setActiveMenu('Snacks&Offers')}
              >
                Snacks&Offers
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search movies..."
                  className="bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-pink-600"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="relative group">
                <User 
                  className="h-6 w-6 text-gray-600 cursor-pointer" 
                  onClick={() => openAuthModal('login')}
                />
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                  <button
                    onClick={() => openAuthModal('login')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => openAuthModal('signup')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
              <Moon className="h-6 w-6 text-gray-600 cursor-pointer" />
            </div>
          </div>
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        mode={authMode}
        onSwitchMode={(mode) => setAuthMode(mode)}
      />
    </>
  );
};

export default Header;
