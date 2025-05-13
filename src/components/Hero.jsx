import React from 'react';
import './Hero.css';
import { Link, useNavigate } from 'react-router-dom';
import SocialSidebar from './SocialSidebar';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <SocialSidebar />
      <div className="container">
        <div className="hero-content1">
          <h1>360° Farming as a Service</h1>
          <p>Empowering Small & Marginal Farmers</p>
          <Link to='/servicess' className="cta-button">Get Started</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 