import './Partners.css'

function Partners() {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="partners-container">
        <h2 className="partners-title">Our Partners</h2>
        <div className="partners-grid">
          <div className="partner-item">
            <img
              src="/assets/partner1.svg"
              alt="Partner 1"
              className="partner-image"
            />
          </div>
          <div className="partner-item">
            <img
              src="/assets/partner1.svg"
              alt="Partner 2"
              className="partner-image"
            />
          </div>
          <div className="partner-item">
            <img
              src="/assets/partner2.svg"
              alt="Partner 3"
              className="partner-image"
            />
          </div>
          <div className="partner-item">
            <img
              src="/assets/partner3.svg"
              alt="Partner 4"
              className="partner-image"
            />
          </div>
           <div className="partner-item">
            <img
              src="/assets/partner3.svg"
              alt="Partner 5"
              className="partner-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners