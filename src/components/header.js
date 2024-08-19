import React from 'react';
import '../styles.css';
function Header() {
  return (
    <header className="header-container">
      <img src="/static/scoolish-menu-bar.jpg" alt="Schoolish Logo" className="logo" />
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
      <a href="#" className="login-btn">Login</a>
    </header>
  );
}

export default Header;
