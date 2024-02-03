import React from "react";
import { NavLink } from "react-router-dom";
import VerticalLogo from "../images/vertical-logo.png";
import "../App.css";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-wrapper p-64">
        <NavLink className="main-nav-link" to="/">
          <img
            className="footer-logo"
            src={VerticalLogo}
            alt="Little Lemon Cafe Logo"
          />
        </NavLink>
        <nav className="footer-col">
          <p className="footer-subhead">Little Lemon</p>
          <ul className="footer-nav">
            <li>
              <NavLink className="footer-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="footer-link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="footer-link" to="/menu">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink className="footer-link" to="/bookings">
                Reservations
              </NavLink>
            </li>
            <li>
              <NavLink className="footer-link" to="/order">
                Order Online
              </NavLink>
            </li>
            <li>
              <NavLink className="footer-link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="contact">
          <p className="footer-subhead">Contact</p>
          <address className="contacts">
            <p className="address-line-1">1234 Street Name</p>
            <p className="address-line-2">City, State, 00000</p>
            <div className="footer-nav">
              <a href="tel:###-123-###" className="footer-link">
                ###-123-###
              </a>
              <a href="#" className="footer-link">
                mail@website.com
              </a>
            </div>
          </address>
        </div>

        <div className="social-media">
          <p className="footer-subhead">Social Media</p>
          <ul className="social-icons">
            <li>
              <a href="#" className="social-link">
                <ion-icon class="social-icon" name="logo-youtube"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon class="social-icon" name="logo-facebook"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon class="social-icon" name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <ion-icon class="social-icon" name="logo-instagram"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
