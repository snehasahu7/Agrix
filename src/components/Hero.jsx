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
          <h1>Revolutionizing Agriculture Through Technology</h1>
          <p>Empowering farmers with cutting-edge solutions for sustainable and efficient farming</p>
          <Link to='/contact' className="cta-button">Get Started</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 