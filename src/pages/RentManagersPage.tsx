import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import './RentManagersPage.css'

function RentManagersPage() {
  const managers = [
    {
      id: 1,
      name: 'Maria Santos',
      role: 'Senior Rent Manager',
      location: 'Metro Manila',
      experience: '8 years',
      properties: 45,
      rating: 4.9,
      email: 'maria.santos@rentals.ph',
      phone: '+63 917 123 4567',
      specialties: ['Condominiums', 'Luxury Properties', 'Commercial Spaces']
    },
    {
      id: 2,
      name: 'John Reyes',
      role: 'Property Specialist',
      location: 'Cebu City',
      experience: '6 years',
      properties: 38,
      rating: 4.8,
      email: 'john.reyes@rentals.ph',
      phone: '+63 917 234 5678',
      specialties: ['Apartments', 'Bed Spaces', 'Student Housing']
    },
    {
      id: 3,
      name: 'Sarah Dela Cruz',
      role: 'Rental Consultant',
      location: 'Makati City',
      experience: '5 years',
      properties: 32,
      rating: 4.9,
      email: 'sarah.delacruz@rentals.ph',
      phone: '+63 917 345 6789',
      specialties: ['Corporate Housing', 'Condominiums', 'Serviced Apartments']
    },
    {
      id: 4,
      name: 'Miguel Torres',
      role: 'Senior Rent Manager',
      location: 'Quezon City',
      experience: '7 years',
      properties: 42,
      rating: 4.7,
      email: 'miguel.torres@rentals.ph',
      phone: '+63 917 456 7890',
      specialties: ['Family Homes', 'Townhouses', 'Apartments']
    },
    {
      id: 5,
      name: 'Patricia Lim',
      role: 'Property Specialist',
      location: 'BGC, Taguig',
      experience: '4 years',
      properties: 28,
      rating: 4.8,
      email: 'patricia.lim@rentals.ph',
      phone: '+63 917 567 8901',
      specialties: ['Modern Condos', 'High-Rise Units', 'Executive Housing']
    },
    {
      id: 6,
      name: 'Robert Garcia',
      role: 'Rental Consultant',
      location: 'Davao City',
      experience: '6 years',
      properties: 35,
      rating: 4.9,
      email: 'robert.garcia@rentals.ph',
      phone: '+63 917 678 9012',
      specialties: ['Commercial Spaces', 'Office Spaces', 'Warehouses']
    },
  ]

  return (
    <div className="rent-managers-page">
      <Navbar />

      {/* Page Header */}
      <PageHeader title="Rent Managers" />

      {/* Main Content */}
      <main className="managers-main-content">
        <div className="managers-intro">
          <h2 className="managers-intro-title">Trusted Rental Experts at Your Service</h2>
          <p className="managers-intro-text">
            Our certified rent managers are licensed real estate professionals with extensive knowledge of the Philippine rental market. 
            They provide personalized assistance to help you find the ideal property that matches your needs and budget.
          </p>
        </div>

        {/* Managers Grid */}
        <div className="managers-grid">
          {managers.map((manager) => (
            <div key={manager.id} className="manager-card">
              <div className="manager-card-header">
                <div className="manager-avatar">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="40" fill="#205ED7"/>
                    <circle cx="40" cy="30" r="12" fill="white"/>
                    <path d="M22 56C22 46 30 38 40 38C50 38 58 46 58 56V62H22V56Z" fill="white"/>
                  </svg>
                </div>
                <div className="manager-rating">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 1L12.5 7.5H19L14 11.5L16 18L10 14L4 18L6 11.5L1 7.5H7.5L10 1Z" fill="#FE8E0A"/>
                  </svg>
                  <span>{manager.rating}</span>
                </div>
              </div>

              <div className="manager-card-body">
                <h3 className="manager-name">{manager.name}</h3>
                <p className="manager-role">{manager.role}</p>

                <div className="manager-stats">
                  <div className="manager-stat">
                    <div className="stat-icon">📍</div>
                    <div className="stat-content">
                      <div className="stat-label">Location</div>
                      <div className="stat-value">{manager.location}</div>
                    </div>
                  </div>
                  <div className="manager-stat">
                    <div className="stat-icon">⏱️</div>
                    <div className="stat-content">
                      <div className="stat-label">Experience</div>
                      <div className="stat-value">{manager.experience}</div>
                    </div>
                  </div>
                  <div className="manager-stat">
                    <div className="stat-icon">🏠</div>
                    <div className="stat-content">
                      <div className="stat-label">Properties</div>
                      <div className="stat-value">{manager.properties} Managed</div>
                    </div>
                  </div>
                </div>

                <div className="manager-specialties">
                  <div className="specialties-label">Specialties:</div>
                  <div className="specialties-tags">
                    {manager.specialties.map((specialty, index) => (
                      <span key={index} className="specialty-tag">{specialty}</span>
                    ))}
                  </div>
                </div>

                <div className="manager-contact-info">
                  <div className="contact-info-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.5 2C2.67 2 2 2.67 2 3.5V12.5C2 13.33 2.67 14 3.5 14H12.5C13.33 14 14 13.33 14 12.5V3.5C14 2.67 13.33 2 12.5 2H3.5Z" fill="#205ED7"/>
                    </svg>
                    <span>{manager.email}</span>
                  </div>
                  <div className="contact-info-item">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.5 2C2.67 2 2 2.67 2 3.5V12.5C2 13.33 2.67 14 3.5 14C4.5 14 11 10 11.5 9.5C12 9 14 5.5 14 3.5C14 2.67 13.33 2 12.5 2H3.5Z" fill="#205ED7"/>
                    </svg>
                    <span>{manager.phone}</span>
                  </div>
                </div>

                <button className="manager-contact-btn">Contact Manager</button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="managers-cta-section">
          <div className="managers-cta-content">
            <h2 className="managers-cta-title">Need Personalized Assistance?</h2>
            <p className="managers-cta-text">
              Our rent managers are ready to help you find your perfect rental property. 
              Contact us today to get started with a free consultation.
            </p>
            <button className="managers-cta-btn">Schedule a Consultation</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default RentManagersPage

