import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../assets/ezgif.com-gif-maker.gif';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleOptionClick = () => {
    setIsDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link to='/'><img src={logo} alt="Agrix" className='logo-img'/></Link> 
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></div>
          <div className={`bar ${isMobileMenuOpen ? 'active' : ''}`}></div>
        </div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><Link to='/' onClick={handleOptionClick}>Home</Link> </li>
          <li className="solutions-dropdown">
            <a href="#solutions" onClick={(e) => {
              e.preventDefault();
              setIsDropdownOpen(!isDropdownOpen);
            }}>Solutions</a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to='/servicess' onClick={handleOptionClick}>Services</Link></li>
                <li><Link to="/tech" onClick={handleOptionClick}>Technology</Link></li>
              </ul>
            )}
          </li>
          {/*<li><Link to='/resources' onClick={handleOptionClick}>Resources</Link></li>*/}
          <li><Link to='/newsroom' onClick={handleOptionClick}>Newsroom</Link></li>
          <li><Link to='/about' onClick={handleOptionClick}>About</Link></li>
          <li><Link to='/contact' onClick={handleOptionClick}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;