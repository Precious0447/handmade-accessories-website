import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Products.css'
import { Link } from 'react-router-dom'

function Products() {
  const [activeCategory, setActiveCategory] = useState('hair')

  const categories = {
    hair: {
      name: 'HAIR ACCESSORIES',
      image: '/images/products/hair/hair-category.jpg',
      intro:
        'Explore our hair accessories — Bonnets • Bows • Scrunchies • Headbands • Twist Headbands • Scrunchy Bows',

      featuredProducts: [
        {
          image: '/images/products/hair/pink-blossom-hair-set.jpg',
          name: 'Pink Blossom Hair Set',
          description:
            'Pink satin hair accessory set featuring a headband, bow, and scrunchies.',
        },
        {
          image: '/images/products/hair/emerald-satin-hair-set.jpg',
          name: 'Emerald Satin Hair Set',
          description:
            'Luxurious emerald satin set including a bonnet, headband, and scrunchie.',
        },
        {
          image: '/images/products/hair/white-satin-scrunchie.jpg',
          name: 'White Satin Scrunchie',
          description:
            'Soft, classic white satin scrunchie for gentle everyday hair styling.',
        },
      ],
    },

    wire: {
      name: 'WIRE ACCESSORIES',
      image: '/images/products/wire/wire-category.jpg',
      intro:
        'Explore our wire accessories — Wire Bracelets • Wire Necklaces • Wire Rings • Wire Anklets • Arm Cuffs',

      featuredProducts: [
        {
          image: '/images/products/wire/spiral-silver-arm-cuff.jpg',
          name: 'Spiral Silver Arm Cuff',
          description:
            'Sculptural silver-tone arm cuff designed with clean, smooth curves.',
        },
        {
          image: '/images/products/wire/serpent-gold-arm-cuff.jpg',
          name: 'Serpent Gold Arm Cuff',
          description:
            'Bold gold-tone arm cuff with elegant, snaking curves.',
        },
        {
          image: '/images/products/wire/wire-ring-bracelet-set.jpg',
          name: 'Wire Ring & Bracelet Set',
          description:
            'Handcrafted matching set featuring wire-wrapped rings and a wire bracelet.',
        },
      ],
    },

    beaded: {
      name: 'BEADED ACCESSORIES',
      image: '/images/products/beaded/beaded-category.png',
      intro:
        'Explore our beaded accessories — Beaded Bracelets • Beaded Necklaces • Beaded Rings • Beaded Anklets • Waist Beads',

      featuredProducts: [
        {
          image: '/images/products/beaded/green-beaded-stack.png',
          name: 'Green Beaded Stack Bracelet & Ring Set',
          description:
            'Handmade multi-strand beaded bracelet and matching ring set in vivid green.',
        },
        {
          image: '/images/products/beaded/beaded-statement-ring.png',
          name: 'Beaded Statement Ring',
          description:
            'Delicate handcrafted beaded ring.',
        },
        {
          image: '/images/products/beaded/pink-beaded-stack.jpeg',
          name: 'Pink Beaded Stack & Ring Set',
          description:
            'Playful pink beaded stack bracelet set paired with matching rings.',
        },
      ],
    },
  }

  const selectedCategory = categories[activeCategory]

  return (
    <>
      <Navbar />

      <main className="products-page">

        {/* Category Tabs */}
        <section className="product-category-tabs">
          <button
            className={activeCategory === 'hair' ? 'active' : ''}
            onClick={() => setActiveCategory('hair')}
          >
            Hair Accessories
          </button>

          <button
            className={activeCategory === 'beaded' ? 'active' : ''}
            onClick={() => setActiveCategory('beaded')}
          >
            Beaded Accessories
          </button>

          <button
            className={activeCategory === 'wire' ? 'active' : ''}
            onClick={() => setActiveCategory('wire')}
          >
            Wire Accessories
          </button>
        </section>

        {/* Selected Category */}
        <section className="product-category">
          <img
            src={selectedCategory.image}
            alt={selectedCategory.name}
            className="product-category-image"
          />

          <div className="product-category-info">
            <h1>{selectedCategory.name}</h1>
            <p>{selectedCategory.intro}</p>
          </div>
        </section>

        {/* Featured Products */}
        <section className="featured-products">
          <p className="section-label">A GLIMPSE OF OUR COLLECTION</p>
          <h2>Featured Products</h2>

          <div className="featured-product-grid">
            {selectedCategory.featuredProducts.map((product) => (
              <div className="featured-product-card" key={product.name}>
                <img
                  src={product.image}
                  alt={product.name}
                />

                <div className="featured-product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Orders */}
        <section className="custom-orders">
          <p className="section-label">CREATE SOMETHING UNIQUE</p>
          <h2>Custom Orders Available</h2>

          <p>
            These featured pieces are just a glimpse of what we create.
            Many of our accessories are custom-made to suit your preferred
            colours, materials, style and inspiration. Have an idea in mind?
            Share it with us and we'll create something uniquely yours.
          </p>

          <Link to="/how-to-order">How to Order</Link>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default Products