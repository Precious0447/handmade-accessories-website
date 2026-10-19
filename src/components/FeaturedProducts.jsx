import { Link } from 'react-router-dom'
function FeaturedProducts() {
  return (
    <section id="products" className="products">
      <p>FEATURED PRODUCTS</p>
      <h2>Our Favourites</h2>

      <div className="product-grid">

        <div className="product-card">
          <img
            src="/images/products/bonnet.jpg"
            alt="2-in-1 Satin Bonnet"
          />
          <h3>2-in-1 Satin Bonnet</h3>
          <p>₦2,500</p>
          <Link to="/how-to-order">Order Now</Link>
        </div>

        <div className="product-card">
          <img
            src="/images/products/bow.jpg"
            alt="Elegant Pink Bow"
          />
          <h3>Elegant Pink Bow</h3>
          <p>₦2,000</p>
          <Link to="/how-to-order">Order Now</Link>
        </div>

        <div className="product-card">
          <img
            src="/images/products/men-stack-bracelets.jpg"
            alt="Vintage Men Stack Bracelets"
          />
          <h3>Vintage Men Stack Bracelets</h3>
          <p>₦6,000</p>
          <Link to="/how-to-order">Order Now</Link>
        </div>

        <div className="product-card">
          <img
            src="/images/products/pink-stack-bracelets.jpeg"
            alt="Pink Stack Bracelets"
          />
          <h3>Pink Stack Bracelets</h3>
          <p>₦6,500</p>
          <Link to="/how-to-order">Order Now</Link>
        </div>

        <div className="product-card">
          <img
            src="/images/products/scrunchies.jpg"
            alt="Satin Scrunchies"
          />
          <h3>Satin Scrunchies</h3>
          <p>₦1,000 each</p>
          <Link to="/how-to-order">Order Now</Link>
        </div>

      </div>
    </section>
  )
}

export default FeaturedProducts