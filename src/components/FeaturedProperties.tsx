import PropertyCard from './PropertyCard'
import './FeaturedProperties.css'

function FeaturedProperties() {
  return (
    <section id="properties" className="featured-section">
      <div className="featured-container">
        <div className="section-header">
          <div className="section-subheader">
            <h2 className="section-title">Featured Properties</h2>
            <p className="section-subtitle">
              Handpicked properties from our verified agents
            </p>
          </div>

          <a href="#all-properties" className="section-link">
            View All Properties <span>→</span>
          </a>
        </div>
      </div>

      <div className="carousel-wrapper">
        <div className="property-carousel">
          {Array.from({ length: 6 }).map((_, index) => (
            <PropertyCard key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProperties
