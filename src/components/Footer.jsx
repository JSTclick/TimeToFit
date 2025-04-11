import React from "react";
import { Mail, Phone, Instagram } from "lucide-react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Description */}
        <div>
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-xl md:text-2xl font-bold text-yellow-500 hover:text-yellow-400">
            Time to Fit India
          </span>
        </Link>
          <p className="text-gray-400 mt-2">Let’s Keep In Touch</p>
          <p className="text-gray-400">Your fitness journey starts here.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-400 text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">Packages</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
            <li><a href="#" className="hover:text-yellow-400">About</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-yellow-400 text-lg font-semibold mb-4">Contact Us</h3>
          <div className="flex items-center space-x-2 text-gray-300">
            <Mail size={18} />
            <span>timetofitindia@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300 mt-2">
            <Phone size={18} />
            <span>8951077599</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300 mt-2">
            <Instagram size={18} />
            <span>@timetofitindia</span>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Time To Fit India. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
