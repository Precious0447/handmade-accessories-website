import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">
      <div className="logo">
        <h1>Handmade by DP Accessories</h1>
      </div>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <nav
        id="main-navigation"
        className={menuOpen ? 'nav-open' : ''}
      >
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/products" onClick={closeMenu}>Products</Link>
        <Link to="/how-to-order" onClick={closeMenu}>How to Order</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
      </nav>
    </header>
  )
}

export default Navbar