import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { Menu, X, Facebook, Instagram, Mail, Phone } from 'lucide-react'; // Social & contact icons

const Header = ({ isLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white fixed top-0 left-0 right-0 z-50 border-b border-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-xl md:text-2xl font-bold text-yellow-500 hover:text-yellow-400">
            Time to Fit India
          </span>
        </Link>

        {/* Desktop Navigation */}
        {!isLoggedIn && (
          <div className="hidden md:flex space-x-4">
            <Link 
              to="/login" 
              className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500 hover:text-black transition duration-300"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        )}

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

          
          {/* Mobile Nav Links */}
{/*           <div className="space-y-2">
            <Link 
              to="/login" 
              onClick={() => setMenuOpen(false)}
              className="block w-full text-left px-4 py-2 border border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500 hover:text-black"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              onClick={() => setMenuOpen(false)}
              className="block w-full text-left px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400"
            >
              Sign Up
            </Link>
          </div>

          {/* Contact Info */}
          <div className="text-sm text-gray-300 space-y-1 pt-4 border-t border-gray-700">
            <div className="flex items-center space-x-2">
              <Phone size={16} /> <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} /> <span>contact@timetofit.in</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4 pt-4 border-t border-gray-700 text-yellow-500">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <Facebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <Instagram />
            </a>
          </div> */}
        </div>
      )}
    </header>
  );
};

export default Header;
