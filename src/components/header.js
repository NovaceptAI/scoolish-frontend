import React, { useState } from 'react';
import '../styles.css';

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <header
      className="header-container" >
      <img className='logo' src="/static/scoolish_logo2.jpg" alt="File Preview" />
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">APIs</a></li>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Blog/Resources</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </nav>
      <a href="/login" className="login-btn">Login</a>
    </header>
  );
}

export default Header;
