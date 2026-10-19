import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import CategorySection from './components/CategorySection'
import WhyChooseUs from './components/WhyChooseUs'
import FeaturedProducts from './components/FeaturedProducts'
import HowToOrderPreview from './components/HowToOrderPreview'
import Footer from './components/Footer'
import Products from './pages/Products'
import HowToOrder from './pages/HowToOrder'
import About from './pages/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <>
              <AnnouncementBar />

              <Navbar />

              <main>
                <Hero />

                <Benefits />

                <CategorySection />

                <WhyChooseUs />

                <FeaturedProducts />

                <HowToOrderPreview />
              </main>

              <Footer />
            </>
          }
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
    path="/how-to-order"
    element={<HowToOrder />}
  />

        <Route
    path="/about"
    element={<About />}
  />
      </Routes>
    </BrowserRouter>
  )
}

export default App