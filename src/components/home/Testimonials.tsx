'use client'

import { useState, useEffect } from 'react'
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

  // Quote icons and decorative vectors for different styles
  const quoteIcons = ['/assets/quote-icon-1.svg', '/assets/quote-icon-2.svg', '/assets/quote-icon-3.svg']
  const decorativeVectors = ['/assets/wave-vector-1.svg', '/assets/wave-vector-2.svg', '/assets/wave-vector-3.svg']
  const styles = ['style-1', 'style-2', 'style-3']

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="testimonials-title">Testimonials</h2>
        <p className="section-subtitle mb-12">
          Highlights of satisfied customers through our services
        </p>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>Loading testimonials...</p>
          </div>
        ) : testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                quoteIcon={quoteIcons[index % quoteIcons.length]}
                avatar={getAvatarUrl(testimonial.avatar)}
                text={testimonial.content}
                name={testimonial.name}
                role={testimonial.role}
                decorativeVector={decorativeVectors[index % decorativeVectors.length]}
                style={styles[index % styles.length] as 'style-1' | 'style-2' | 'style-3'}
              />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <p>No testimonials available at the moment.</p>
          </div>
        )}

        {/* Carousel indicators */}
        <div className="carousel-indicators">
          <button className="carousel-indicator active" aria-label="Slide 1" />
          <button className="carousel-indicator" aria-label="Slide 2" />
          <button className="carousel-indicator" aria-label="Slide 3" />
          <button className="carousel-indicator" aria-label="Slide 4" />
          <button className="carousel-indicator" aria-label="Slide 5" />
        </div>
      </div>
    </section>
  )
}

export default Testimonials

