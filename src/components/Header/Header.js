import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    // Toggle class on body to adjust content margin/padding
    if (!menuOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  };

  return (
    <header className="header">
      <div className="logo">
        Books<span className="logo-highlight">Reviews</span>
      </div>
      <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
        <a href="#home">HOME</a>
        <a href="#books" className="dropdown">BOOKS</a>
        <a href="#reviews">REVIEWS</a>
        <a href="#news">NEWS</a>
        <a href="#contacts">CONTACTS</a>
        <a href="#search" className="search-icon">
          <i className="fa fa-search"></i>
        </a>
      </nav>
      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
