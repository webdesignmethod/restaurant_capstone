import React from 'react'
import Nav from "./Nav.js";
import Logo from '../Logo.svg'
import "../App.css"

const Header = () => {
  return (
    <header>
      <div className="header-wrapper container">
        <img src={Logo} alt="Little Lemon Cafe Logo" />
        <Nav/>
      </div>
    </header>
  )
}

export default Header