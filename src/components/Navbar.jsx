import React, { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
import { Link,useNavigate } from 'react-router-dom';
>>>>>>> 53509f6d3352d41d21d60387f8aed6a4add9d1f4
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
          <Link to="/"><h1>Agrix</h1></Link>
        </div>
        <ul className="nav-links">
<<<<<<< HEAD
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
=======
          <li><Link to='/'>Home</Link> </li>
          <li><Link to='/about'>About</Link></li>
>>>>>>> 53509f6d3352d41d21d60387f8aed6a4add9d1f4
          <li className="solutions-dropdown">
            <a href="#" onClick={(e) => {
              e.preventDefault();
              setIsDropdownOpen(!isDropdownOpen);
            }}>Solutions</a>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
<<<<<<< HEAD
                <li><Link to="/services" onClick={handleOptionClick}>Services</Link></li>
=======
                <li><Link to='/servicess' onClick={handleOptionClick}>Services</Link></li>
>>>>>>> 53509f6d3352d41d21d60387f8aed6a4add9d1f4
                <li><Link to="/technology" onClick={handleOptionClick}>Technology</Link></li>
              </ul>
            )}
          </li>
<<<<<<< HEAD
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/newsroom">Newsroom</Link></li>
          <li><Link to="/contact">Contact</Link></li>
=======
          <li><Link to='/resouces'>Resources</Link></li>
          <li><Link to='/newsroom'>Newsroom</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
>>>>>>> 53509f6d3352d41d21d60387f8aed6a4add9d1f4
        </ul>
      </nav>
    </header>
  );
};

export default Navbar; 