import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Servicess from "./pages/Servicess/services.jsx"
import Technology from "./pages/Technology/Technology.jsx"
import Resources from "./pages/Resources/Resources.jsx"
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import Newsroom from './pages/Newsroom/Newsroom.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Privacy from './pages/Privacy/privacy.jsx';
import Cookies from './pages/Cookies/cookies.jsx';
import Disclaimer from './pages/Disclaimer/disclaimer.jsx';
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
         <Route path='/resources' element={<Resources/>} />
         <Route path='/newsroom' element={<Newsroom/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/privacy' element={<Privacy/>}/>
         <Route path='/cookies' element={<Cookies/>}/>
          <Route path='/disclaimer' element={<Disclaimer/>}/>

      </Routes>
      
    
      <Footer />
      </Router>
      
    </div>
  );
}

export default App;