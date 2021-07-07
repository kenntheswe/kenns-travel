import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check Out These EPIC Destinations!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <ul className="cards-items">
            <CardItem
              src=""
              text=""
              label=""
              path="/services"
            />
            <CardItem
              src=""
              text=""
              label=""
              path="/services"
            />
            <CardItem
              src=""
              text=""
              label=""
              path="/services"
            />
            <CardItem
              src=""
              text=""
              label=""
              path="/services"
            />
            <CardItem
              src=""
              text=""
              label=""
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
