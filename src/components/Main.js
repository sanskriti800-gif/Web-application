import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import greekSalad from '../assets/image/greek salad.jpg'
import Lemondessert from '../assets/image/lemon dessert.jpg'
import resetaurant from '../assets/image/restaurant chef B.jpg'
import '../App.css'

function Main() {
  return (
    <main id="main">
      <div class="main-heading">
        <div class="about-description">
          <h1 style={{ color: 'black' }}>This Week Special</h1>
        </div>
        <div class="about-description">
          <button style={{margin:'0', padding:'0'}}>Order Menu</button>
        </div>
      </div>
      <div class="main">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={greekSalad} />
          <Card.Body>
            <Card.Title>Greek Salad</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Button variant="warning">Order a delivery $4</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={resetaurant} />
          <Card.Body>
            <Card.Title>Bruchetta</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Button variant="warning">Order a delivery $4</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={Lemondessert} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
            <Button variant="warning">Order a delivery $4</Button>
          </Card.Body>
        </Card>
      </div>
    </main>
  )
}

export default Main