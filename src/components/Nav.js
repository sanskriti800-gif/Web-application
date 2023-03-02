import React from 'react'
import logo from '../assets/image/logo.png'
import '../App.css'

function Nav() {
  return (
    <div class="nav" id="nav">
      <ul class="nav-bar" type='none'>
        <li> <img src={logo} alt="Logo" class="nav-logo"/> </li>
        <li> <a href="#nav">Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href="#main">Menu</a> </li>
        <li> <a href="#reservation" id="reservation">Reservation </a> </li>
        <li> <a href="#order online" id="order online">Order Online</a> </li>
        <li> <a href="#order online" id="order online">Login</a> </li>
      </ul>
    </div>
  )
}

export default Nav