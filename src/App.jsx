import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import servicess from './pages/servicess/servicess.jsx';
import Technology from "./pages/Technology/Technology.jsx"
import Resources from "./pages/Resources/Resources.jsx"
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import Newsroom from './pages/Newsroom/Newsroom.jsx';
import Contact from './pages/Contact/Contact.jsx';
import './App.css';

// Create a wrapper component to use the useLocation hook
const AppContent = () => {
  const location = useLocation();
  const showSocialSidebar = location.pathname !== '/contact';

  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar />
      {showSocialSidebar && <SocialSidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add other routes as needed */}
      </Routes>
=======
      <Router>
        <Navbar />
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/services' element={<servicess/>} />
         <Route path='/tech' element={<Technology/>} />
         <Route path='/resource' element={<Resources/>} />
         <Route path='/newsroom' element={<Newsroom/>} />
      </Routes>
      
    
>>>>>>> 53509f6d3352d41d21d60387f8aed6a4add9d1f4
      <Footer />
      </Router>
      
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