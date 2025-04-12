import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Bookmark, User, Menu, X } from "lucide-react";

const UserHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white px-6 py-4 border-b border-gray-700 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo / Title */}
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl font-bold">Home</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link 
            to="/" 
            className="px-4 py-2 hover:text-yellow-500 transition duration-300"
          >
            Home
          </Link>
          <Link 
            to="/exercises" 
            className="px-4 py-2 hover:text-yellow-500 transition duration-300"
          >
            Exercises
          </Link>
          <Link 
            to="/training" 
            className="px-4 py-2 hover:text-yellow-500 transition duration-300"
          >
            Training
          </Link>
          <Link 
            to="/theory" 
            className="px-4 py-2 hover:text-yellow-500 transition duration-300"
          >
            Theory
          </Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-4 text-gray-300 text-sm md:text-base">
        <div className="flex gap-4">
  <Link to="/search">
    <Search className="w-5 h-5 hover:text-yellow-400 cursor-pointer" />
  </Link>

  <Link to="/saved">
    <Bookmark className="w-5 h-5 hover:text-yellow-400 cursor-pointer" />
  </Link>

  <Link to="/profile">
    <User className="w-5 h-5 hover:text-yellow-400 cursor-pointer" />
  </Link>
</div>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 hover:text-yellow-400 cursor-pointer" />
            ) : (
              <Menu className="w-6 h-6 hover:text-yellow-400 cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden mt-4">
          <div className="flex flex-col space-y-3">
            <Link
              onClick={() => setIsMobileMenuOpen(false)}
              to="/"
              className="px-4 py-2 hover:bg-gray-800 rounded transition duration-300"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsMobileMenuOpen(false)}
              to="/exercises"
              className="px-4 py-2 hover:bg-gray-800 rounded transition duration-300"
            >
              Exercises
            </Link>
            <Link
              onClick={() => setIsMobileMenuOpen(false)}
              to="/training"
              className="px-4 py-2 hover:bg-gray-800 rounded transition duration-300"
            >
              Training
            </Link>
            <Link
              onClick={() => setIsMobileMenuOpen(false)}
              to="/theory"
              className="px-4 py-2 hover:bg-gray-800 rounded transition duration-300"
            >
              Theory
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default UserHeader;
