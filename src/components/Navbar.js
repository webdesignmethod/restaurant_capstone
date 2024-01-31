import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdFastfood } from "react-icons/md";

import { NavLink } from "react-router-dom";
import "../App.css";
import "../Queries.css";
import Logo from "../Logo.svg";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  function CloseNav() {
    setToggleNav(false);
  }

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-link" to="/">
        <img className="main-logo" src={Logo} alt="Little Lemon Cafe Logo" />
      </NavLink>
      <ul className="main-nav-list">
        <li>
          <NavLink className="main-nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="main-nav-link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="main-nav-link" to="/menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink className="main-nav-link" to="/bookings">
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink className="main-nav-link" to="/order">
            Order Online
          </NavLink>
        </li>
        <li>
          <NavLink className="main-nav-link" to="/login">
            Login
          </NavLink>
        </li>
      </ul>

      <div className="mobile-nav">
        <IoMenu
          className="overlay-open"
          color="#333"
          fontSize={30}
          onClick={() => setToggleNav(true)}
        />

        {toggleNav && (
          <div className="mobile-overlay openNav">
            <MdFastfood
              fontSize={30}
              className="overlay-close"
              onClick={CloseNav}
            />
            <ul className="mobile-nav-list">
              <li>
                <NavLink className="mobile-nav-link" to="/" onClick={CloseNav}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="mobile-nav-link"
                  to="/about"
                  onClick={CloseNav}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="mobile-nav-link"
                  to="/menu"
                  onClick={CloseNav}
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="mobile-nav-link"
                  to="/bookings"
                  onClick={CloseNav}
                >
                  Reservations
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="mobile-nav-link"
                  to="/order"
                  onClick={CloseNav}
                >
                  Order Online
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="mobile-nav-link"
                  to="/login"
                  onClick={CloseNav}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
