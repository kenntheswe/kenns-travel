import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

import Img1 from '../images/img-1.jpg'
import Img2 from '../images/img-2.jpg'
import Img3 from '../images/img-3.jpg'
import Img4 from '../images/img-4.jpg'
import Img5 from '../images/img-5.jpg'
import Img6 from '../images/img-6.jpg'
import Img7 from '../images/img-7.jpg'
import Img8 from '../images/img-8.jpg'
import Img9 from '../images/img-9.jpg'
import Img10 from '../images/img-10.jpg'
import Img11 from '../images/img-11.jpg'

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check Out These EPIC Destinations!</h1>
      <div className="cards-container">
        <div className="cards-wrapper">
          <div className="cards-items-top">
            <CardItem
              src={Img1}
              text="Explore the hidden natural waterfall in Aomori"
              label="Nature"
              path="/services"
            />
            <CardItem
              src={Img2}
              text="Check out the most popular cherry blossom spot in Tokyo"
              label="Nature"
              path="/services"
            />
          </div>
          <div className="cards-items">
            <CardItem
              src={Img3}
              text="Enjoy the ultimate autumn red leaves view in Aomori"
              label="Nature"
              path="/services"
            />
            <CardItem
              src={Img4}
              text="Visit the UNESCO world heritage temple in Kyoto"
              label="Heritage"
              path="/services"
            />
            <CardItem
              src={Img5}
              text="Taste delicious skewers in 'Piss Alley' Tokyo"
              label="Exciting"
              path="/services"
            />
          </div>
          <div className="cards-items">
            <CardItem
              src={Img6}
              text="Experience an artistic world without boundaries in Tokyo"
              label="Arts"
              path="/services"
            />
            <CardItem
              src={Img7}
              text="Surf at beautiful Cape Kyan in Okinawa"
              label="Thrilling"
              path="/services"
            />
            <CardItem
              src={Img8}
              text="Ski on powder snow mountain landscape in Niseko"
              label="Exciting"
              path="/services"
            />
          </div>
          <div className="cards-items">
            <CardItem
              src={Img9}
              text="Stroll through thousand gates at Fushimi Inari in Kyoto"
              label="Shrine"
              path="/services"
            />
            <CardItem
              src={Img10}
              text="Camp at Kirishima Kinkowan National Park in Kagoshima"
              label="Nature"
              path="/services"
            />
            <CardItem
              src={Img11}
              text="Enjoy close-up marine life view at Aqua World in Ibaraki"
              label="Exotic"
              path="/services"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
