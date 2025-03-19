import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';

import Services from './components/Services';


import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import Impact from './components/Impact';
import AgriValueChain from './components/AgriValueChain';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SocialSidebar />
      <Hero />
      <Philosophy />
      <Services />
      <Impact />
      <AgriValueChain />
      
      <Footer />
    </div>
  );
}

export default App; 