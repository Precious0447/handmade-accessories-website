import { Link } from 'react-router-dom'
function HowToOrderPreview() {
  return (
    <section id="how-to-order" className="how-to-order">
      <div>
        <p>HOW TO ORDER</p>
        <h2>It's quick and easy!</h2>
      </div>

      <div>
        <p>1. Browse & choose your products</p>
        <p>2. Send your order</p>
        <p>3. Make payment</p>
        <p>4. Sit back & wait for delivery</p>
      </div>

      <Link to="/how-to-order">Learn More</Link>
    </section>
  )
}

export default HowToOrderPreview