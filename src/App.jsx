// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import HeroSection from './pages/AdminLanding';
import Footer from './components/Footer';
import UserDashboard from './pages/userDashboard';
import Training from './pages/Training'
import WorkoutPage from './pages/WorkoutPage'
import WorkoutVideos from './pages/WorkoutVideos'
import Profile from './pages/Profile'
import BottomNavBar from './components/BottomNavbar'
import UserHeader from './components/TopNavbar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  return (
    <Router>
  <div className="min-h-screen bg-black text-white">
    <Header isLoggedIn={isLoggedIn} />
    <div className="w-full pt-16">
      <Routes>
        <Route path="/" element={<HeroSection />} />
        {/* Show BottomNavBar only if logged in */}
        <Route 
    path="/training" 
    element={isLoggedIn ? <Training /> : <Navigate to="/login" />} 
  />
  <Route 
    path="/workout-page" 
    element={isLoggedIn ? <WorkoutPage /> : <Navigate to="/login" />} 
  />
  <Route 
    path="/workout-Videos" 
    element={isLoggedIn ? <WorkoutVideos /> : <Navigate to="/login" />} 
  />
  <Route 
    path="/profile" 
    element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} 
  />
        <Route 
          path="/login" 
          element={
            isLoggedIn ? 
              <Navigate to="/dashboard" /> : 
              <LoginPage onLogin={handleLogin} />
          } 
        />
        <Route 
          path="/signup" 
          element={
            isLoggedIn ? 
              <Navigate to="/dashboard" /> : 
              <SignupPage onSignup={handleLogin} />
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            isLoggedIn ? 
              <UserDashboard onLogout={handleLogout} /> : 
              <Navigate to="/login" />
          } 
        />
      </Routes>
      {isLoggedIn && <UserHeader/>}

      {/* Show BottomNavBar only if logged in */}
      {isLoggedIn && <BottomNavBar />}

      <Footer />
    </div>
  </div>
</Router>

  );
}

export default App;


