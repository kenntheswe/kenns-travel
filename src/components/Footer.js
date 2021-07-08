import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

import './Footer.css'

import Logo from '../images/logo.png'

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the newsletter to receive our best deals!
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="Your Email" className="footer-input" />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">How It Works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Follow Us</h2>
            <Link to={{ pathname: "https://www.instagram.com/kennvungan/" }} target="_blank">Instagram</Link>
            <Link to={{ pathname: "https://www.facebook.com/kennvun/" }} target="_blank">Facebook</Link>
            <Link to={{ pathname: "https://twitter.com/kennvungan" }} target="_blank">Twitter</Link>
            <Link to={{ pathname: "https://www.youtube.com/channel/UCLEZau3eHxdhcUtbWgay7sA" }} target="_blank">YouTube</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrapper">
          <div className="footer-logo">
            <Link to="/" className="company-logo">
              KENN'S <img src={Logo} alt="logo" className="footer-logo-img" style={{width: '24px'}}/>
            </Link>
          </div>
          <small className="copyright">
            &copy; Kenn's 2021. All Rights Reserved.
          </small>
          <div className="social-icons">
            <Link to={{ pathname: "https://www.linkedin.com/in/kennvungan/" }} target="_blank" className="social-icon-link linkedin" aria-label="LinkedIn">
              <i className="fab fa-linkedin"/>
            </Link>
            <Link to={{ pathname: "https://github.com/Kenn-0" }} target="_blank" className="social-icon-link github" aria-label="Github">
              <i className="fab fa-github"/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
