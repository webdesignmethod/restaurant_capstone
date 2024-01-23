import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import MenuPage from "./components/MenuPage";
import OrderPage from "./components/OrderPage";
import BookingPage from "./components/BookingPage";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/bookings" element={<BookingPage />}></Route>
        <Route path="/order" element={<OrderPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
