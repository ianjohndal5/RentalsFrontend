import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/home/Hero'
import FeaturedProperties from '../components/home/FeaturedProperties'
import Testimonials from '../components/home/Testimonials'
import Blogs from '../components/home/Blogs'
import Footer from '../components/layout/Footer'
import '../styles/landing.css'

function HomePage() {
  return (
    <div className="landing-page">
      {/* Temporary testing links */}
      <div style={{ 
        padding: '10px', 
        backgroundColor: '#f0f0f0', 
        textAlign: 'center',
        borderBottom: '1px solid #ddd'
      }}>
        <Link to="/admin" style={{ marginRight: '20px', color: '#007bff', textDecoration: 'none' }}>
          Admin Dashboard
        </Link>
        <Link to="/agent" style={{ color: '#007bff', textDecoration: 'none' }}>
          Agent Dashboard
        </Link>
      </div>
      <Navbar />
      <Hero />
      <FeaturedProperties />
      <Testimonials />
      <Blogs />
      <Footer />
    </div>
  )
}

export default HomePage

