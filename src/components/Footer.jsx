import { Link } from 'react-router-dom'
import { FaWhatsapp, FaInstagram, FaPhoneAlt } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <h2>Handmade by DP Accessories</h2>
        <p>Quality handmade with love.</p>
      </div>

      <div className="footer-links">
        <h3>Quick Links</h3>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/how-to-order">How to Order</Link>
        <Link to="/about">About</Link>
     </div>

      <div className="footer-contact">
        <h3>Get in Touch</h3>

        <a
          href="https://wa.me/2347037537437"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
          WhatsApp
        </a>

        <a href="tel:+2347037537437">
          <FaPhoneAlt />
          Call Us
        </a>

        <a
          href="https://www.instagram.com/handmade_by_dp_accessories/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
          Instagram
        </a>
      </div>
    </footer>
  )
}

export default Footer