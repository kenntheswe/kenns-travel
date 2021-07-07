import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

import './Footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the newsletter to receive our best vacation deals!
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
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Twiiter</Link>
            <Link to="/">YouTube</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrapper">
          <div className="footer-logo">
            <Link to="/" className="company-logo">
              KENN'S TRAVEL <i className="fas fa-route"/>
            </Link>
          </div>
          <small className="copyright">
            &copy; Kenn's Travel 2021. All Rights Reserved.
          </small>
          <div className="social-icons">
            <Link to="/" target="_blank" className="social-icon-link linkedin" aria-label="LinkedIn">
              <i className="fab fa-linkedin"/>
            </Link>
            <Link to="/" target="_blank" className="social-icon-link github" aria-label="Github">
              <i className="fab fa-github"/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
