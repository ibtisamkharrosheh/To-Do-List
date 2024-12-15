import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import BookDetailPage from "./BookDetailPage.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:id" element={<BookDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
