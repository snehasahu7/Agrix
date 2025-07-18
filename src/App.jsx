import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Services from "./pages/services/services.jsx"
import Technology from "./pages/Technology/Technology.jsx"
import Resources from "./pages/Resources/Resources.jsx"
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import Newsroom from './pages/Newsroom/Newsroom.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Privacy from './pages/privacy/privacy.jsx';
import Cookies from './pages/Cookies/cookies.jsx';
import Disclaimer from './pages/Disclaimer/disclaimer.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        <div className="content-wrap">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/tech' element={<Technology />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/newsroom' element={<Newsroom />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/cookies' element={<Cookies />} />
            <Route path='/disclaimer' element={<Disclaimer />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;