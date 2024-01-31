import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// IMPORTED PAGES
import HomePage from "./components/../Pages/Home/HomePage";
import About from "./components/../Pages/About/About";
import MenuPage from "./components/../Pages/Menu/MenuPage";
import OrderPage from "./components/../Pages/Orders/OrderPage";
import BookingPage from "./components/../Pages/Bookings/BookingPage";
import LoginPage from "./components/../Pages/Login/LoginPage";
import ConfirmBooking from "./components/../Pages/Bookings/ConfirmBooking";

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
        <Route path="/confirmation" element={<ConfirmBooking />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
