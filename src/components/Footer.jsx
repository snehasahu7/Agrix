import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ezgif.com-gif-maker.gif';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-bottom">
      <div className="footer-left">
      <ul className="footer-links">
      <li><Link to="/privacy">Privacy Policy</Link></li> 
           <li><Link to="/cookies">Cookies Policy</Link></li>
           <li><Link to="/disclaimer">Disclaimer</Link></li>
          <p> All rights reserved.&copy; Agrix Agro</p>
        </ul>
        </div>
        <div className="logo">
      <Link to='/'><img src={logo} alt="Agrix" className='logo-img'/></Link> 
    </div>
      </div>
    </footer>
  );
};

export default Footer;