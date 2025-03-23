import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
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
          <li><Link to='/'>Home</Link> </li>
          <li><Link to='/about'>About</Link></li>
          <li className="solutions-dropdown">
            <a href="#solutions" onClick={(e) => {
              e.preventDefault();
              setIsDropdownOpen(!isDropdownOpen);
            }}>Solutions</a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to='/servicess' onClick={handleOptionClick}>Services</Link></li>
                <li><Link to="/technology" onClick={handleOptionClick}>Technology</Link></li>
              </ul>
            )}
          </li>
          <li><Link to='/resouces'>Resources</Link></li>
          <li><Link to='/newsroom'>Newsroom</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;