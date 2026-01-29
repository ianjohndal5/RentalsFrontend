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

