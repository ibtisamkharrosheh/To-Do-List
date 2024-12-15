import "./styles/App.css";
import React, {  } from "react";
//import ImageDetailComponent from "./Booksection.js";
import Header from "./components/Header/Header.js";
//import Categories from "./Categories/Categories.js";
import Footer from "./components/Footer/Footer.js";
import "./components/BookCarousel/BookCarousel.css";
import { BrowserRouter as Router,  } from "react-router-dom";
//import  Home  from "./Home.js";
//import BookDetailPage from "./BookDetailPage.js";
import AppRoutes from "./pages/AppRoutes.js";
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
