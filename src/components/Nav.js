import React from 'react'
import "../App.css"

const Nav = () => {
  return (
    <nav className='flex main-nav'>
      <ul className='flex main-nav-list'>
        <li><a className='main-nav-link' href="">Home</a></li>
        <li><a className='main-nav-link' href="">About</a></li>
        <li><a className='main-nav-link' href="">Menu</a></li>
        <li><a className='main-nav-link' href="">Reservations</a></li>
        <li><a className='main-nav-link' href="">Order Online</a></li>
        <li><a className='main-nav-link' href="">Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav