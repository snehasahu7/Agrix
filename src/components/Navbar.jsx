import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <h1>Agrix</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li className="solutions-dropdown">
            <a href="#solutions" onClick={(e) => {
              e.preventDefault();
              setIsDropdownOpen(!isDropdownOpen);
            }}>Solutions</a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><a href="#services" onClick={handleOptionClick}>Services</a></li>
                <li><a href="#technology" onClick={handleOptionClick}>Technology</a></li>
              </ul>
            )}
          </li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#newsroom">Newsroom</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar; 