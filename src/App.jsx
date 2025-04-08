import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Servicess from "./pages/Servicess/servicess.jsx"
import Technology from "./pages/Technology/Technology.jsx"
import Resources from "./pages/Resources/Resources.jsx"
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import Newsroom from './pages/Newsroom/Newsroom.jsx';
import Contact from './pages/Contact/Contact.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/servicess' element={<Servicess />}/>
         <Route path='/tech' element={<Technology/>} />
         <Route path='/resource' element={<Resources/>} />
         <Route path='/newsroom' element={<Newsroom/>} />
         <Route path='/contact' element={<Contact/>} />
      </Routes>
      
    
      <Footer />
      </Router>
      
    </div>
  );
}

export default App;