import React from 'react'
import Button from './Button'

import '../App.css'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-container">
      <video></video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
        <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className="far fa-play-circle"></i></Button>
      </div>
    </div>
  )
}

export default Hero
