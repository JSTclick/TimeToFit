// pages/LoginPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would validate and send to backend
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-yellow-500 mb-6 text-center">Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2" htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-yellow-500"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-300 mb-2" htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-yellow-500"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition duration-300"
            >
              Login
            </button>
          </div>
          
          <p className="text-gray-400 text-center">
            Don't have an account? <Link to="/signup" className="text-yellow-500 hover:text-yellow-400">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;