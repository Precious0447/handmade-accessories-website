import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './About.css'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* About Hero */}
        <section className="about-hero">
          <p>OUR STORY</p>
          <h1>About Handmade by DP Accessories</h1>
          <p>Quality handmade with love.</p>
        </section>


        {/* Our Story */}
        <section className="about-story">
          <div className="about-story-content">
            <p className="section-label">HOW IT STARTED</p>

            <h2>From a Simple Idea to a Growing Brand</h2>

            <p>
              Handmade by DP Accessories began in March 2025 with a simple
              idea: to turn a growing interest in sewing and creativity into
              something beautiful and meaningful.
            </p>

            <p>
              After beginning to learn fashion design and sewing, I had to
              pause my learning journey when I moved from Lagos to Abuja.
              Although I had not yet reached the level where I felt ready to
              sew professionally, I did not want to wait before putting my
              skills to use.
            </p>

            <p>
              I started exploring handmade hair accessories through tutorials
              and practice, learning how to create bonnets, scrunchies, bows
              and headbands. What started as a small idea gradually became a
              business — and something I genuinely enjoyed creating.
            </p>

            <p>
              As the brand grew, I expanded beyond hair accessories into
              beaded and wire accessories, giving me even more ways to create
              pieces that reflect different styles and personalities.
            </p>
          </div>
        </section>


        {/* More Than Accessories */}
        <section className="about-values">
          <div>
            <p className="section-label">WHAT INSPIRES US</p>

            <h2>More Than Just Accessories</h2>

            <p>
              I love pretty things, thoughtful details and the way the right
              accessory can elevate an outfit. Handmade by DP Accessories is
              about creating beautiful pieces with care while giving you the
              freedom to express your own style.
            </p>

            <p>
              Many of our pieces can also be customized around your preferred
              colours, materials, style and inspiration.
            </p>
          </div>
        </section>


        {/* Meet the Founder */}
        <section className="founder-section">
          <div className="founder-image">
            <img
              src="/images/about/founder.png"
              alt="Founder of Handmade by DP Accessories"
            />
          </div>

          <div className="founder-content">
            <p className="section-label">MEET THE FOUNDER</p>

            <h2>Precious Ukachukwu</h2>

            <h3>Founder, Handmade by DP Accessories</h3>

            <p>
              Precious is a creative entrepreneur with a passion for handmade
              accessories, design and technology.
            </p>

            <p>
              What began as a small creative project has grown into a brand
              inspired by her love for beautiful details, personal style and
              creating pieces that make people feel special.
            </p>
          </div>
        </section>


        {/* Growing With Purpose */}
        <section className="about-vision">
          <p className="section-label">LOOKING AHEAD</p>

          <h2>Growing With Purpose</h2>

          <p>
            What started as a small handmade project is something I hope to
            grow into a much bigger creative brand. With every new design,
            order and customer, I am building toward a future where Handmade
            by DP Accessories becomes a full creative space with a wide
            collection of handmade accessories.
          </p>

          <Link to="/how-to-order">How to Order</Link>
        </section>

      </main>

      <Footer />
    </>
  )
}

export default About