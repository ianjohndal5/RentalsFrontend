'use client'

import { useRouter } from 'next/navigation'
import { ASSETS } from '@/utils/assets'
import './VerticalPropertyCard.css'

interface VerticalPropertyCardProps {
  id?: number | string
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
  propertySize?: string
  location?: string
}

function VerticalPropertyCard({
  id,
  propertyType = 'Commercial Spaces',
  date = 'Sat 05, 2024',
  price = '$1200/Month',
  title = 'Azure Residences - 2BR Corner Suite',
  image = ASSETS.PLACEHOLDER_PROPERTY_MAIN,
  rentManagerName = 'Rental.Ph Official',
  rentManagerRole = 'Rent Manager',
  bedrooms = 4,
  bathrooms = 2,
  parking: _parking = 2,
  propertySize = '24 sqft',
  location,
}: VerticalPropertyCardProps) {
  const router = useRouter()

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on buttons or links
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('svg')) {
      return
    }
    if (id) {
      router.push(`/property/${id}`)
    }
  }

  return (
    <article
      className="vertical-property-card"
      onClick={handleCardClick}
      style={{ cursor: id ? 'pointer' : 'default' }}
    >
      <div className="vertical-property-image-wrapper">
        <img
          src={image}
          alt={title}
          className="vertical-property-image"
          onError={(e) => {
            // Fallback to default image if the provided image fails to load
            e.currentTarget.src = ASSETS.PLACEHOLDER_PROPERTY_MAIN
          }}
        />
        <div className="vertical-property-contact-icons">
          <button className="vertical-property-like" aria-label="Add to favorites">
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
          <button aria-label="Gmail" title="Gmail">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M22 6L12 13L2 6" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </button>
          <button aria-label="WhatsApp" title="WhatsApp">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2c-.151.504.335.99.839.839l3.032-.892A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" stroke="#25D366" strokeWidth="2" fill="none"/>
              <path d="M9.5 8.5c-.15-.35-.3-.36-.45-.36h-.4c-.15 0-.4.05-.6.3-.2.25-.75.75-.75 1.8s.75 2.1.85 2.25c.1.15 1.5 2.3 3.65 3.2.5.2.9.35 1.2.45.5.15.95.15 1.3.1.4-.05 1.25-.5 1.4-1s.15-1 .1-1.05c-.05-.1-.2-.15-.4-.25l-1.2-.6c-.2-.1-.35-.15-.5.15-.15.3-.6.75-.75.9-.15.15-.25.15-.45.05-.2-.1-.85-.3-1.6-1-.6-.55-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4.1-.1.2-.25.3-.35.1-.1.15-.2.2-.3.05-.1.05-.2 0-.3-.05-.1-.5-1.2-.7-1.65z" fill="#25D366"/>
            </svg>
          </button>
          <button aria-label="Share" title="Share">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="5" r="3" stroke="#205ED7" strokeWidth="2" fill="none" />
              <circle cx="6" cy="12" r="3" stroke="#205ED7" strokeWidth="2" fill="none" />
              <circle cx="18" cy="19" r="3" stroke="#205ED7" strokeWidth="2" fill="none" />
              <path d="M8.59 13.51L15.42 17.49M15.41 6.51L8.59 10.49" stroke="#205ED7" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className="vertical-property-content">
        <div className="vertical-property-header-row">
          <p className="vertical-property-type">{propertyType}</p>
          <p className="vertical-property-date">{date}</p>
        </div>
        <div className="vertical-property-price-row">
          <p className="vertical-property-price">{price}</p>
        </div>
        <h3 className="vertical-property-title">
          {title}{location ? `, ${location}` : ''}
        </h3>

        <div className="vertical-rent-manager-badge">
          <img
            src={ASSETS.LOGO_ICON}
            alt="Rentals.ph Official"
            className="vertical-rent-manager-avatar"
          />
          <div className="vertical-rent-manager-info">
            <p className="vertical-rent-manager-name">{rentManagerName}</p>
            <p className="vertical-rent-manager-role">{rentManagerRole}</p>
          </div>
        </div>
      </div>
      <div className="vertical-property-features">
        <div className="vertical-property-feature-item" title="Bedrooms">
          <div className="feature-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5Z" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 9H21" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />
              <path d="M7 13H7.01" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11 13H11.01" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 13H15.01" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19 13H19.01" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="feature-tooltip">Bedrooms</span>
          </div>
          <span>{bedrooms}</span>
        </div>
        <div className="vertical-property-feature-item" title="Bathrooms">
          <div className="feature-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 2V6M16 2V6" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />
              <path d="M3 6H21C22.1046 6 23 6.89543 23 8V20C23 21.1046 22.1046 22 21 22H3C1.89543 22 1 21.1046 1 20V8C1 6.89543 1.89543 6 3 6Z" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 12H6.01" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 12H18.01" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 16H6.01" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 16H18.01" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="feature-tooltip">Bathrooms</span>
          </div>
          <span>{bathrooms}</span>
        </div>
        <div className="vertical-property-feature-item" title="Property Size">
          <div className="feature-icon-wrapper">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 3H21V21H3V3Z" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 9H21" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />
              <path d="M9 3V21" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 9H12.01" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 15H12.01" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="feature-tooltip">Property Size</span>
          </div>
          <span>{propertySize}</span>
        </div>
      </div>
    </article>
  )
}

export default VerticalPropertyCard