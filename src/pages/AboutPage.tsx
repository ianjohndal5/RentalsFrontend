import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import Partners from '../components/Partners'
import PageHeader from '../components/PageHeader'
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="about-page">
      <Navbar />
      
      {/* Page Header */}
      <PageHeader title="About Us" />

      {/* Hero Section with Background Image */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          <img
            src="/assets/tropical-travel-real-estate.png"
            alt="About Us background"
            className="about-hero-background"
            onError={(e) => {
              // Fallback to SVG if PNG doesn't load
              e.currentTarget.src = '/assets/aboutusbackgroundphoto.svg'
            }}
          />
          <div className="about-hero-content">
            <h1 className="about-hero-title text-center">About Rentals.ph</h1>
            <p className="about-hero-subtitle">We provide full service at every step.</p>
          </div>
        </div>
      </section>

      {/* Main Content - 4 Cards Grid with Images */}
      <section className="about-cards-section">
        <div className="about-cards-container">
          <div className="about-cards-grid">
            {/* Card 1 - Rent.ph Cares */}
            <div className="about-card">
              <div className="about-card-image-wrapper">
                <img 
                  src="/assets/rentph-cares.png" 
                  alt="Rent.ph Cares - Your Rental, Their Hope" 
                  className="about-card-image"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="about-card-icon-wrapper">
                <div className="about-card-magnifier">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8" stroke="#FE8E0A" strokeWidth="2" fill="none"/>
                    <path d="m21 21-4.35-4.35" stroke="#FE8E0A" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="about-card-icon">
                  <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="31" cy="31" r="31" fill="#205ED7"/>
                    <path d="M31 15L22 23V42H40V23L31 15Z" fill="white" stroke="#FE8E0A" strokeWidth="1"/>
                    <rect x="27" y="32" width="8" height="8" fill="#FE8E0A"/>
                  </svg>
                </div>
              </div>
              <h3 className="about-card-title">Rent.ph Cares Your Rental, Their Hope</h3>
              <p className="about-card-text">
                Our tagline, 'Your Rentals, Their Hope,' reflects this commitment. It's a reminder that the simple act of renting a home can inspire meaningful, lasting change for those in need. With Rent.ph Cares, every successful rental transaction becomes an opportunity to give back. Whether it's supporting local families, empowering education, or funding community programs, your trust in us fuels hope and transforms lives.
              </p>
            </div>

            {/* Card 2 - Trusted Partner */}
            <div className="about-card">
              <div className="about-card-image-wrapper">
                <img 
                  src="/assets/your-trusted-rental-partner.png" 
                  alt="Your Trusted Rental Partner" 
                  className="about-card-image"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="about-card-icon-wrapper">
                <div className="about-card-magnifier">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8" stroke="#FE8E0A" strokeWidth="2" fill="none"/>
                    <path d="m21 21-4.35-4.35" stroke="#FE8E0A" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="about-card-icon">
                  <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="31" cy="31" r="31" fill="#205ED7"/>
                    <circle cx="31" cy="25" r="7" fill="white"/>
                    <path d="M20 40C20 33 24 28 31 28C38 28 42 33 42 40V48H20V40Z" fill="white"/>
                    <circle cx="28" cy="25" r="2" fill="#FE8E0A"/>
                    <circle cx="34" cy="25" r="2" fill="#FE8E0A"/>
                  </svg>
                </div>
              </div>
              <h3 className="about-card-title">Your Trusted Rental Partner</h3>
              <p className="about-card-text">
                To date, Rentals.ph is the only rental portal backed by realtors, rent managers and licensed real estate professionals to help property owners and assist clients personally making us the most trusted brand in rental marketing and servicing.
              </p>
            </div>

            {/* Card 3 - Transforming Investment */}
            <div className="about-card">
              <div className="about-card-image-wrapper">
                <img 
                  src="/assets/transforming-real-estate.png" 
                  alt="Transforming Real Estate Investment" 
                  className="about-card-image"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="about-card-icon-wrapper">
                <div className="about-card-magnifier">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8" stroke="#FE8E0A" strokeWidth="2" fill="none"/>
                    <path d="m21 21-4.35-4.35" stroke="#FE8E0A" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="about-card-icon">
                  <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="31" cy="31" r="31" fill="#205ED7"/>
                    <rect x="20" y="22" width="10" height="18" fill="white"/>
                    <rect x="32" y="22" width="10" height="18" fill="white"/>
                    <rect x="25" y="28" width="4" height="4" fill="#FE8E0A"/>
                    <rect x="33" y="28" width="4" height="4" fill="#FE8E0A"/>
                  </svg>
                </div>
              </div>
              <h3 className="about-card-title">Transforming Real Estate Investment Into Productive Assets</h3>
              <p className="about-card-text">
                Established in 2014, under Philippine Real Estate Management Solutions Inc., Rentals.ph was organized with one goal in mind - to serve as the vehicle in translating real estate investments into productive assets.
              </p>
            </div>

            {/* Card 4 - Comprehensive Solution */}
            <div className="about-card">
              <div className="about-card-image-wrapper">
                <img 
                  src="/assets/comprehensive-rental-solution.png" 
                  alt="Comprehensive Rental Solution Nationwide" 
                  className="about-card-image"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="about-card-icon-wrapper">
                <div className="about-card-magnifier">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="8" stroke="#FE8E0A" strokeWidth="2" fill="none"/>
                    <path d="m21 21-4.35-4.35" stroke="#FE8E0A" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="about-card-icon">
                  <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="31" cy="31" r="31" fill="#205ED7"/>
                    <rect x="24" y="24" width="14" height="14" fill="white"/>
                    <rect x="28" y="28" width="6" height="6" fill="#FE8E0A"/>
                  </svg>
                </div>
              </div>
              <h3 className="about-card-title">Your Comprehensive Rental Solution Nationwide</h3>
              <p className="about-card-text">
                Together with its sister brand Filipino Homes, Rentals.ph has serviced owners and companies in marketing their lands, apartments, houses, condominiums, warehouses and commercial spaces across the country through our network of rent professionals in key cities and provinces in the Philippines.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      
      
        <Testimonials />
     
      
      <div className="about-partners-wrapper">
        <Partners />
        <p className="partners-subtitle-wrapper">Building Dreams, Together</p>
      </div>
      
      {/* National Real Estate Convention 2025 Banner */}
      <section className="convention-banner">
        <div className="convention-banner-content">
          <h2 className="convention-title">NATIONAL REAL ESTATE CONVENTION 2025</h2>
          <div className="convention-co-presentors">
            <h3 className="convention-section-title">CO-PRESENTORS</h3>
            <div className="convention-logos">
              <div className="convention-logo-item">LEUTERIO REALTY</div>
              <div className="convention-logo-item">FILIPINO HOMES.COM</div>
              <div className="convention-logo-item">Rent.ph</div>
              <div className="convention-logo-item">CEBULANDMASTERS</div>
            </div>
          </div>
          <div className="convention-sponsors">
            <div className="sponsor-category">
              <h3 className="convention-section-title">MAJOR SPONSORS</h3>
              <div className="convention-logos">
                <div className="convention-logo-item">8990</div>
                <div className="convention-logo-item">AppleOne</div>
                <div className="convention-logo-item">Filinvest</div>
                <div className="convention-logo-item">Taft Properties</div>
              </div>
            </div>
            <div className="sponsor-category">
              <h3 className="convention-section-title">MINOR SPONSORS</h3>
              <div className="convention-logos">
                <div className="convention-logo-item">BDO</div>
                <div className="convention-logo-item">Primeworld</div>
              </div>
            </div>
            <div className="sponsor-category">
              <h3 className="convention-section-title">STAR BENEFACTORS</h3>
              <div className="convention-logos">
                <div className="convention-logo-item">Various Partners</div>
              </div>
            </div>
          </div>
          <div className="convention-details">
            <p className="convention-date">OCT 19-20, 2025 | WATERFRONT HOTEL & CASINO LAHUG, CEBU CITY</p>
            <p className="convention-hashtag">#LRNAATCON2025</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default AboutPage