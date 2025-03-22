import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import './App.css';

// Create a wrapper component to use the useLocation hook
const AppContent = () => {
  const location = useLocation();
  const showSocialSidebar = location.pathname !== '/contact';

  return (
    <div className="App">
      <Navbar />
      {showSocialSidebar && <SocialSidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App; 