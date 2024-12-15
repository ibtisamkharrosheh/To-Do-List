import React from 'react';
import './Header.css';
const Header = () =>{
    return (
        <header className="header">
          <div className="logo">Books<span className="logo-highlight">Reviews</span></div>
          <nav className="nav">
            <a href="#home">HOME</a>
            <a href="#books" className="dropdown">BOOKS</a>
            <a href="#reviews">REVIEWS</a>
            <a href="#news">NEWS</a>
            <a href="#contacts">CONTACTS</a>
            <a href="#search" className="search-icon">
            <i className="fa fa-search"></i>  
            </a>
          </nav>
        </header>
      );
  
}

export default Header;