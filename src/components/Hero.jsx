import { Link } from 'react-router-dom'
function Hero() {
  return (
    <section className="hero">
      <p>HANDMADE ACCESSORIES</p>

      <h2>Beautiful Accessories</h2>

      <p>Quality handmade with love.</p>

      <p>
        Hair, beaded, and wire accessories — carefully handmade
        to add a beautiful touch to your style.
      </p>

      <Link to="/products">Shop Our Products</Link>
    </section>
  )
}

export default Hero