import './PropertyCard.css'

interface PropertyCardProps {
  propertyType?: string
  date?: string
  price?: string
  title?: string
  image?: string
  rentManagerName?: string
  rentManagerRole?: string
  bedrooms?: number
  bathrooms?: number
  parking?: number
}

function PropertyCard({
  propertyType = 'Commercial Spaces',
  date = 'Sat 05, 2024',
  price = '$1200/Month',
  title = 'Azure Residences - 2BR Corner Suite',
  image = '/assets/property-main.png',
  rentManagerName = 'Rental.Ph Official',
  rentManagerRole = 'Rent Manager',
  bedrooms = 4,
  bathrooms = 2,
  parking = 2,
}: PropertyCardProps) {
  return (
    <article className="property-card">
      <img
        src={image}
        alt={title}
        className="property-image"
      />
      <div className="property-content">
        <div className="property-header-row">
          <p className="property-type">{propertyType}</p>
          <p className="property-date">{date}</p>
        </div>
        <div className="property-price-row">
          <p className="property-price">{price}</p>
          <button className="property-like" aria-label="Add to favorites">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                stroke="#ef4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </button>
        </div>
        <h3 className="property-title">{title}</h3>
        <div className="property-contact-icons">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="#205ED7" strokeWidth="2"/>
            <path d="M3 7L12 13L21 7" stroke="#205ED7" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 2H7C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z" stroke="#25D366" strokeWidth="2"/>
            <path d="M12 18H12.01" stroke="#25D366" strokeWidth="2" strokeLinecap="round"/>
            <path d="M9 7H15" stroke="#25D366" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="5" r="3" fill="#205ED7"/>
            <circle cx="6" cy="12" r="3" fill="#205ED7"/>
            <circle cx="18" cy="19" r="3" fill="#205ED7"/>
            <path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49" stroke="#205ED7" strokeWidth="2"/>
          </svg>
        </div>
        <div className="rent-manager-badge">
          <img
            src="/assets/rental-ph-logo.svg"
            alt="Rentals.ph Official"
            className="rent-manager-avatar"
          />
          <div className="rent-manager-info">
            <p className="rent-manager-name">{rentManagerName}</p>
            <p className="rent-manager-role">{rentManagerRole}</p>
          </div>
        </div>
      </div>
      <div className="property-features">
        <div className="property-feature-item">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 20V14M3 14V4H7L10 7H14V14M3 14H14M14 14V20" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="5" y="16" width="2" height="2" fill="#6b7280"/>
            <rect x="9" y="16" width="2" height="2" fill="#6b7280"/>
          </svg>
          <span>{bedrooms}</span>
        </div>
        <div className="property-feature-item">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 7H15M9 11H15M9 15H15" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/>
            <path d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 12.9995 3.16613 13.9581 3.46927 14.85L3 21L9.15 20.5307C10.0419 20.8339 11.0005 21 12 21C16.9706 21 21 16.9706 21 12Z" stroke="#6b7280" strokeWidth="2"/>
          </svg>
          <span>{bathrooms}</span>
        </div>
        <div className="property-feature-item">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 17V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17Z" stroke="#6b7280" strokeWidth="2"/>
            <path d="M9 12L12 9M12 9L15 12M12 9V15" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>{parking}</span>
        </div>
      </div>
    </article>
  )
}

export default PropertyCard