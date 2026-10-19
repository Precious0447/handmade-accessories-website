import { Link } from 'react-router-dom'
function CategorySection() {
  return (
    <section id="categories" className="categories">
      <p>EXPLORE OUR RANGE</p>
      <h2>Shop By Category</h2>

      <div className="category-grid">
        <div className="category-card">
          <img
            src="/images/categories/hair-accessories.jpg"
            alt="Hair Accessories"
          />
          <h3>Hair Accessories</h3>
          <Link to="/products">Shop Now</Link>
        </div>

        <div className="category-card">
          <img
            src="/images/categories/wire-accessories.jpg"
            alt="Wire Accessories"
          />
          <h3>Wire Accessories</h3>
          <Link to="/products">Shop Now</Link>
        </div>

        <div className="category-card">
          <img
            src="/images/categories/beaded-accessories.jpg"
            alt="Beaded Accessories"
          />
          <h3>Beaded Accessories</h3>
          <Link to="/products">Shop Now</Link>
        </div>
      </div>
    </section>
  )
}

export default CategorySection