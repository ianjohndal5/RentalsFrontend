'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import TestimonialCard from '../common/TestimonialCard'
import { testimonialsApi } from '../../api'
import type { Testimonial } from '../../types'
import './Testimonials.css'

function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await testimonialsApi.getAll()
        setTestimonials(data)
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  // Helper function to get avatar URL
  const getAvatarUrl = (avatar: string | null): string => {
    if (!avatar) return '/assets/testimonial-elaine.png'
    if (avatar.startsWith('http://') || avatar.startsWith('https://')) {
      return avatar
    }
    if (avatar.startsWith('storage/') || avatar.startsWith('/storage/')) {
      return `/api/${avatar.startsWith('/') ? avatar.slice(1) : avatar}`
    }
    return avatar
  }

  return (
    <section className="testimonials-section" id="testimonials">
      {/* Background image with blur effect */}
      <div className="testimonials-background"></div>
      
      {/* Main content container */}
      <div className="testimonials-container">
        <div className="testimonials-content">
          {/* Left Section - Promotional Block */}
          <div className="testimonials-left">
            <div className="testimonials-quote-icon-large">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="#4A90E2"/>
                <path d="M25 35C25 30 28 25 33 25C38 25 41 30 41 35C41 40 38 45 33 45C31 45 29 44 28 43V50H25V35Z" fill="white"/>
                <path d="M55 35C55 30 58 25 63 25C68 25 71 30 71 35C71 40 68 45 63 45C61 45 59 44 58 43V50H55V35Z" fill="white"/>
              </svg>
            </div>
            <h2 className="testimonials-left-heading">Trusted By The Industry's Best</h2>
            <p className="testimonials-left-text">
              Discover Why The Most Successful Property Managers In The Philippines Rely On Rentals.Ph To Streamline Their Operations, Verify Quality Tenants, And Maximize Their Portfolio's Reach.
            </p>
            <Link href="/contact" className="testimonials-connect-link">
              Connect Now
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Right Section - Testimonials */}
          <div className="testimonials-right">
            <h2 className="testimonials-right-heading">TESTIMONIALS</h2>
            {loading ? (
              <div className="testimonials-loading">
                <p>Loading testimonials...</p>
              </div>
            ) : testimonials.length > 0 ? (
              <div className="testimonials-cards-grid">
                {testimonials.slice(0, 3).map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    avatar={getAvatarUrl(testimonial.avatar)}
                    text={testimonial.content}
                    name={testimonial.name}
                    role={testimonial.role}
                  />
                ))}
              </div>
            ) : (
              <div className="testimonials-empty">
                <p>No testimonials available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

