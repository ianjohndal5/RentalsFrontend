import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HorizontalPropertyCard from '../components/HorizontalPropertyCard'
import { getRentManagerById } from '../data/rentManagers'
import './RentManagerDetailsPage.css'

function RentManagerDetailsPage() {
  const { id } = useParams<{ id: string }>()
  const managerId = Number(id)
  const manager = useMemo(() => (Number.isFinite(managerId) ? getRentManagerById(managerId) : undefined), [managerId])

  const [activeTab, setActiveTab] = useState<'listing' | 'reviews'>('listing')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  })

  if (!manager) {
    return (
      <div className="rm-details-page">
        <Navbar />
        <div className="rm-details-banner">
          <div className="rm-details-banner-content">
            <h1 className="rm-details-banner-title">MY LISTING</h1>
            <div className="rm-details-banner-accent"></div>
          </div>
        </div>
        <div className="rm-details-breadcrumbs">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">&gt;</span>
          <Link to="/rent-managers" className="breadcrumb-link">RM</Link>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-current">Not Found</span>
        </div>
        <main className="rm-details-main">
          <div className="rm-details-container">
            <div className="rm-not-found-card">
              <h2>Rent Manager not found</h2>
              <p>Please go back and select a valid rent manager.</p>
              <Link className="rm-back-link" to="/rent-managers">Back to Rent Managers</Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Rent manager contact submitted:', { managerId: manager.id, ...formData })
    alert('Message sent successfully!')
    setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' })
  }

  return (
    <div className="rm-details-page">
      <Navbar />

      <div className="rm-details-banner">
        <div className="rm-details-banner-content">
          <h1 className="rm-details-banner-title">MY LISTING</h1>
          <div className="rm-details-banner-accent"></div>
        </div>
      </div>

      <div className="rm-details-breadcrumbs">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span className="breadcrumb-separator">&gt;</span>
        <Link to="/rent-managers" className="breadcrumb-link">RM</Link>
        <span className="breadcrumb-separator">&gt;</span>
        <span className="breadcrumb-current">{manager.name}</span>
      </div>

      <main className="rm-details-main">
        <div className="rm-details-container">
          <section className="rm-top-grid">
            <div className="rm-profile-card">
              <div className="rm-profile-top">
                <div className="rm-profile-photo" aria-hidden="true">
                  <div className="rm-photo-placeholder">
                    <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="400" height="300" fill="#f0f0f0"/>
                      <circle cx="200" cy="120" r="50" fill="#205ED7"/>
                      <circle cx="200" cy="100" r="20" fill="white"/>
                      <path d="M150 200C150 180 170 160 200 160C230 160 250 180 250 200V220H150V200Z" fill="white"/>
                    </svg>
                  </div>
                </div>

                <div className="rm-profile-header">
                  <div className="rm-profile-title">
                    <h2 className="rm-profile-name">{manager.name}</h2>
                    <div className="rm-profile-meta-row">
                      <span className="rm-badge">{manager.role}</span>
                      <span className="rm-listings-pill">{manager.listingsCount} Listings</span>
                    </div>
                  </div>

                  <div className="rm-profile-qr" aria-label="QR code placeholder">
                    <div className="rm-qr-box" />
                  </div>
                </div>

                <div className="rm-profile-awards" aria-hidden="true">
                  <div className="rm-award-badge" />
                  <div className="rm-award-badge" />
                  <div className="rm-award-badge" />
                </div>
              </div>

              <div className="rm-profile-body">
                <h3 className="rm-about-title">{manager.aboutTitle}</h3>
                {manager.aboutParagraphs.map((p, idx) => (
                  <p key={idx} className="rm-about-paragraph">{p}</p>
                ))}
                <ul className="rm-about-bullets">
                  {manager.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className="rm-contact-card">
              <h3 className="rm-contact-title">Contact {manager.name}</h3>
              <form className="rm-contact-form" onSubmit={handleSubmit}>
                <input
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="rm-input"
                  required
                />
                <input
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="rm-input"
                  required
                />
                <input
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="rm-input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="rm-input"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="rm-textarea"
                  rows={4}
                  required
                />
                <button className="rm-contact-submit" type="submit">Contact</button>
              </form>
            </aside>
          </section>

          <section className="rm-tabs-card">
            <div className="rm-tabs-header">
              <button
                className={`rm-tab ${activeTab === 'listing' ? 'active' : ''}`}
                onClick={() => setActiveTab('listing')}
                type="button"
              >
                Listing ({manager.listingsCount})
              </button>
              <button
                className={`rm-tab ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
                type="button"
              >
                Reviews
              </button>
            </div>

            {activeTab === 'listing' ? (
              <div className="rm-listing-panel">
                <div className="rm-listing-controls">
                  <div className="rm-search-wrap">
                    <span className="rm-search-icon" aria-hidden="true">🔍</span>
                    <input className="rm-search" placeholder="Search properties by name, location" />
                  </div>
                  <div className="rm-filters-row">
                    <select className="rm-select">
                      <option>All Prices</option>
                    </select>
                    <select className="rm-select">
                      <option>Newest First</option>
                    </select>
                    <button className="rm-more-filters" type="button">More Filters</button>
                  </div>
                </div>

                <div className="rm-listings">
                  {(manager.listings.length ? manager.listings : []).map((p) => (
                    <HorizontalPropertyCard
                      key={p.id}
                      id={p.id}
                      propertyType={p.propertyType}
                      date={p.date}
                      price={p.price}
                      title={p.title}
                      image={p.image}
                      rentManagerName={manager.name}
                      rentManagerRole={manager.role}
                      bedrooms={p.bedrooms}
                      bathrooms={p.bathrooms}
                      parking={p.parking}
                    />
                  ))}
                  {!manager.listings.length && (
                    <div className="rm-empty-state">
                      <p>No listings yet.</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="rm-reviews-panel">
                <div className="rm-empty-state">
                  <p>No reviews yet.</p>
                </div>
              </div>
            )}

            <div className="rm-pagination">
              <button className="rm-page-arrow" type="button">←</button>
              <button className="rm-page-num active" type="button">1</button>
              <button className="rm-page-num" type="button">2</button>
              <button className="rm-page-num" type="button">3</button>
              <span className="rm-page-ellipsis">...</span>
              <button className="rm-page-num" type="button">50</button>
              <button className="rm-page-arrow" type="button">→</button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default RentManagerDetailsPage


