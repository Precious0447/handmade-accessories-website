import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import './HowToOrder.css'

function HowToOrder() {
  return (
    <>
      <Navbar />

      <main className="how-to-order-page">

        {/* Hero */}
        <section className="how-to-order-hero">
          <p>HOW TO ORDER</p>
          <h1>Getting Your Favourite Pieces Is Simple</h1>
          <p>
            Browse our collections, choose your favourites, and send us your
            order. Custom designs are welcome too!
          </p>
        </section>


        {/* Steps */}
        <section className="order-steps">
          <div className="order-steps-heading">
            <p className="section-label">THE PROCESS</p>
            <h2>How It Works</h2>
          </div>

          <div className="steps-grid">

            <div className="step-card">
              <span>01</span>
              <h3>Browse & Choose</h3>
              <p>
                Explore our collections and choose the pieces you'd like to
                order. Custom designs are also welcome.
              </p>
            </div>

            <div className="step-card">
              <span>02</span>
              <h3>Send Your Order</h3>
              <p>
                Send us the products you'd like to order through WhatsApp or
                Instagram. For custom pieces, you can also share your preferred
                colours, materials, style or inspiration.
              </p>
            </div>

            <div className="step-card">
              <span>03</span>
              <h3>Confirm & Make Payment</h3>
              <p>
                We'll confirm your order details and total, then provide the
                payment information you need to complete your order.
              </p>
            </div>

            <div className="step-card">
              <span>04</span>
              <h3>Your Order Is Prepared</h3>
              <p>
                Once your order is confirmed, we'll prepare your handmade
                pieces and arrange delivery.
              </p>
            </div>

          </div>
        </section>


        {/* Custom Orders */}
        <section className="custom-order-section">
          <div>
            <p className="section-label">HAVE SOMETHING IN MIND?</p>

            <h2>Let's Create Something Unique</h2>

            <p>
              Many of our accessories can be customized to suit your preferred
              colours, materials, style and inspiration. Share your idea with
              us and let's bring it to life.
            </p>
          </div>
        </section>


        {/* Contact / Order CTA */}
        <section className="order-contact">
          <p className="section-label">READY TO ORDER?</p>

          <h2>Let's Get Your Order Started</h2>

          <p>
            Send us a message through WhatsApp or Instagram to place your
            order or discuss a custom design.
          </p>

          <div className="order-contact-buttons">

            <a
              href="https://wa.me/2347037537437"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              Order via WhatsApp
            </a>

            <a
              href="https://www.instagram.com/handmade_by_dp_accessories/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
              Message us on Instagram
            </a>

          </div>

          <div className="order-contact-details">
            <p>
              <strong>WhatsApp:</strong> 0703 753 7437
            </p>

            <p>
              <strong>Instagram:</strong> @Handmade_by_DP_Accessories
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default HowToOrder