import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>NAVIGATION</h3>
        <ul>
          <li>Home</li>
          <li className="highlighted">Books</li>
          <li>Reviews</li>
          <li>News</li>
          <li>Contacts</li>
        </ul>
      </div>
      <div className="footer-section category">
        <h3>CATEGORIES</h3>
        <div className="categories">
          <ul>
            <li>Art</li>
            <li>Biography</li>
            <li>Business</li>
            <li>Chick Lit</li>
            <li>Children's</li>
            <li>Christian</li>
            <li>Classics</li>
            <li>Comics</li>
          </ul>
          <ul>
            <li>Contemporary</li>
            <li>Cookbooks</li>
            <li>Crime</li>
            <li>Ebooks</li>
            <li>Fantasy</li>
            <li>Fiction</li>
            <li>Gay And Lesbian</li>
            <li>Graphic Novels</li>
          </ul>
          <ul>
            <li>Historical Fiction</li>
            <li>History</li>
            <li>Horror</li>
            <li>Humor And Comedy</li>
            <li>Manga</li>
            <li>Memoir</li>
            <li>Music</li>
          </ul>
        </div>
      </div>
      <div className="footer-section">
        <h3>FOLLOW US</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>RSS</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
