import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-bottom">
      <ul className="footer-links">
      <li><Link to="/privacy">Privacy Policy</Link></li> 
           <li><Link to="/cookies">Cookies Policy</Link></li>
           <li><Link to="/disclaimer">Disclaimer</Link></li>
          <p> All rights reserved.&copy; Agrix Agro</p>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;