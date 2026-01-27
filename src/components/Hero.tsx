import './Hero.css'

function Hero() {
  return (
    <section id="home" style={{ position: 'relative', height: '550px', overflow: 'hidden' }}>
      {/* Background image that matches Figma hero */}
      <img
        src="/assets/landing-hero-bg-784ecf.png"
        alt="Skyline and buildings background"
        className="hero-background"
      />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h2 className="hero-title">
          FIND YOUR HOME IN THE <br></br> PHILIPPINES
        </h2>
        <p className="hero-subtitle mt-3 max-w-3xl">
          <span className="hero-subtitle-text">Trusted Rentals, simplified. Start your journey with </span>
          <span className="hero-subtitle-brand">Rentals.ph.</span>
        </p>

        {/* Search bar and filters */}
        <div className="search-container">
          <div className="search-input-wrapper">
            <input 
              type="text" 
              className="search-input" 
              placeholder="What are you looking for?"
            />

            <div className="search-divider" />

            <select className="search-dropdown">
              <option value="">Property Type</option>
              <option value="search">Search here...</option>
              <option value="condominium">Condominium</option>
              <option value="apartment">Apartment</option>
              <option value="bedspace">Bed Space</option>
              <option value="commercial">Commercial Spaces</option>
              <option value="office">Office Spaces</option>
            </select>
              
            <div className="search-divider" />
              
            <select className="search-dropdown">
              <option value="">Location</option>
              <option value="search">Search here...</option>
              <option value="abra">Abra</option>
              <option value="agusan-del-sur">Agusan Del Sur</option>
              <option value="aklan">Aklan</option>
              <option value="antique">Antique</option>
              <option value="apayao">Apayao</option>
              <option value="manila">Manila</option>
              <option value="makati">Makati</option>
              <option value="quezon">Quezon City</option>
              <option value="cebu">Cebu</option>
            </select>

            <button className="search-button">
              <span className="sr-only">Search</span>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="6" stroke="white" strokeWidth="2.5"/>
                <line x1="15.5" y1="15.5" x2="20" y2="20" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero