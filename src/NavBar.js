import React, { useState } from 'react';
import './App.css'; // Ensure you include your CSS file for Navbar styles

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <h4>AgriVista Farms</h4>
      <div className="burger-menu" onClick={toggleMenu}>
        &#9776; {/* Unicode for the burger icon */}
      </div>
      <div className={`header-list ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Pages</li>
        </ul>
      </div>
      <div className={`header-button ${isMenuOpen ? 'active' : ''}`}>
        <button className="header-login">Login</button>
        <button className="header-signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
