import React from 'react';

function Footer() {
  return (
    <footer>
  <div className="footer-container">
    <div className="footer-section">
      <h4>Scoolish</h4>
      <p>Empowering Minds, Shaping Futures.</p>
      <div className="social-links">
        <a href="#"><img src="/static/x_logo.jpg" className="small-logo" alt="Twitter" /></a>
        <a href="#"><img src="/static/fb_logo.jpg" className="small-logo" alt="Facebook" /></a>
        <a href="#"><img src="/static/insta_logo.jpg" className="small-logo" alt="Instagram" /></a>
        <a href="#"><img src="/static/linkedin_logo.jpg" className="small-logo" alt="LinkedIn" /></a>
      </div>
    </div>
    <div className="footer-section">
      <h4>Useful Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Terms of service</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>Our Services</h4>
      <ul>
        <li><a href="#">School Integration</a></li>
        <li><a href="#">Professional Integration</a></li>
        <li><a href="#">API Services</a></li>
        <li><a href="#">Video analysis</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>Contact</h4>
      <p>Phone: +91 4000 231276</p>
      <p>Email: connect@digitalmachine.in</p>
      <p>Address: Digital machine Pvt. Ltd. Arab Egypt (c), 400065</p>
    </div>
  </div>
  <div className="footer-bottom">
    <p>All Rights Reserved | Copyright © digitalmachine.</p>
  </div>
</footer>

  );
}

export default Footer;
