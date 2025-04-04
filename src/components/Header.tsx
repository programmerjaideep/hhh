
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-maroon via-maroon-dark to-maroon relative">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#800000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white font-hindi text-xl font-bold tracking-wider animate-fade-in">
                साहित्य पुस्तकालय
              </h1>
              <span className="text-gold-light text-xs tracking-wider">Hindi Sahitya Library</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-gold transition-colors">
              मुख्य पृष्ठ
            </Link>
            <Link to="/books" className="text-white hover:text-gold transition-colors">
              पुस्तकें
            </Link>
            <Link to="/authors" className="text-white hover:text-gold transition-colors">
              लेखक
            </Link>
            <Link to="/genres" className="text-white hover:text-gold transition-colors">
              श्रेणियाँ
            </Link>
            <Link to="/about" className="text-white hover:text-gold transition-colors">
              हमारे बारे में
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="खोजें..."
                className="py-1.5 pl-3 pr-10 rounded-full text-sm bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white/20 placeholder-white/50 w-36 transition-all duration-300 focus:w-48"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70" />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gold focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden mt-4`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-white hover:bg-maroon-light block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              मुख्य पृष्ठ
            </Link>
            <Link
              to="/books"
              className="text-white hover:bg-maroon-light block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              पुस्तकें
            </Link>
            <Link
              to="/authors"
              className="text-white hover:bg-maroon-light block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              लेखक
            </Link>
            <Link
              to="/genres"
              className="text-white hover:bg-maroon-light block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              श्रेणियाँ
            </Link>
            <Link
              to="/about"
              className="text-white hover:bg-maroon-light block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              हमारे बारे में
            </Link>
            <div className="relative mt-3">
              <input
                type="text"
                placeholder="खोजें..."
                className="w-full py-2 pl-3 pr-10 rounded-full text-sm bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gold focus:bg-white/20 placeholder-white/50"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/70" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
