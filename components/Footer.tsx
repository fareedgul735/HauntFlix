import React from 'react'
import { FaInstagram, FaYoutube, FaTwitter, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>HauntFlix</h2>
        <p>Enter if you dare. Watch the fear unfold...</p>
        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>

      <div className="footer-links">
        <ul>
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HauntFlix. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

