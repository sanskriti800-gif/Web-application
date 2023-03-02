import React from 'react'
import logo from '../assets/image/Footer.png'
import "../App.css"

function Footer() {
  return (
    <footer class="footer">
      <section class="foot-logo"><img src={logo} /></section>
      <section>
        <ul type="none">
          <li class="foot-header">Doormat Navigation</li>
          <li><a href="#nav" style={{color:'#F4CE14'}}>Home</a></li>
          <li><a href="#about" style={{color:'#F4CE14'}}>About </a></li>
          <li><a href="#main" style={{color:'#F4CE14'}}>Menu </a></li>
          <li><a href="" style={{color:'#F4CE14'}}>Reservation</a></li>
          <li><a href="" style={{color:'#F4CE14'}}>Order Online</a></li>
          <li><a href="" style={{color:'#F4CE14'}}>Login</a></li>
        </ul>
      </section>
      <section>
        <ul type="none">
          <li class="foot-header">Contact</li>
          <li>Bhadohi, UttarPradesh</li>
          <li>+91 7068335774</li>
          <li>gupta.sanskriti08@gmail.com</li>
        </ul>
      </section>
      <section>
        <ul type="none">
          <li class="foot-header">Social Media Links</li>
          <li><a href="https://www.linkedin.com/in/sanskriti-gupta-151aab202/" style={{color:'#F4CE14'}}>Linkedin</a></li>
          <li><a href="https://github.com/sanskriti800-gif" style={{color:'#F4CE14'}}>Github</a></li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer