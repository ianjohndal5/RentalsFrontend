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
              <path d="M24 5.5V18.5C24 19.8807 22.8807 21 21.5 21H2.5C1.11929 21 0 19.8807 0 18.5V5.5C0 4.11929 1.11929 3 2.5 3H21.5C22.8807 3 24 4.11929 24 5.5Z" stroke="#EA4335" strokeWidth="2" fill="none" />
              <path d="M12 13L0 5.5V3L12 10.5L24 3V5.5L12 13Z" stroke="#EA4335" strokeWidth="2" fill="none" />
              <path d="M0 3L12 10.5L24 3" stroke="#EA4335" strokeWidth="2" fill="none" />
            </svg>
          </button>
          <button aria-label="WhatsApp" title="WhatsApp">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" stroke="#25D366" strokeWidth="2" fill="none" />
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