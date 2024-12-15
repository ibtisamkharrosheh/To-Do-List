import "./App.css";
import React, { useEffect, useState } from "react";
//import ImageDetailComponent from "./Booksection.js";
import Header from "./Header/Header.js";
//import Categories from "./Categories/Categories.js";
import Footer from "./Footer/Footer.js";
import "./books-section.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import  Home  from "./Home.js";
//import BookDetailPage from "./BookDetailPage.js";
import AppRoutes from "./AppRoutes.js";
const App = () => {
 
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
