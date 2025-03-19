import React from 'react';
import './Hero.css';
import SocialSidebar from './SocialSidebar';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <SocialSidebar />
      <div className="container">
        <div className="hero-content">
          <h1>Revolutionizing Agriculture Through Technology</h1>
          <p>Empowering farmers with cutting-edge solutions for sustainable and efficient farming</p>
          <a href="#contact" className="cta-button">Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 