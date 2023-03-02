import React from 'react'
import image from '../assets/image/restauranfood.jpg'
function Header() {
  return (
    <header id="about">
      <div class="about">
        <div class="about-description">
          <h1 class="title">Little Lemon</h1>
          <h4 class="subtitle">Chicago</h4>
          <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          <button>Reserve Table</button>
        </div>
        <div class="about-image">
          <img src={image}/>
        </div>
      </div>
    </header>
  )
}

export default Header