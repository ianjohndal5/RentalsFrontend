import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import './ContactUsPage.css'

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="contact-page">
      <Navbar />

      {/* Page Header */}
      <PageHeader title="Contact Us" />

      {/* Main Content */}
      <main className="contact-main-content">
        <div className="contact-grid">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="form-section-title">Send Us a Message</h2>
            <p className="form-section-subtitle">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+63 XXX XXX XXXX"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="property-inquiry">Property Inquiry</option>
                    <option value="rent-manager">Rent Manager Assistance</option>
                    <option value="general">General Question</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <h2 className="info-section-title">Contact Information</h2>
            <p className="info-section-subtitle">
              Reach out to us through any of these channels
            </p>

            <div className="contact-info-cards">
              {/* Office Location */}
              <div className="contact-info-card">
                <div className="info-card-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#205ED7" opacity="0.1"/>
                    <path d="M24 12C18.48 12 14 16.48 14 22C14 28.84 24 38 24 38C24 38 34 28.84 34 22C34 16.48 29.52 12 24 12ZM24 25C22.34 25 21 23.66 21 22C21 20.34 22.34 19 24 19C25.66 19 27 20.34 27 22C27 23.66 25.66 25 24 25Z" fill="#205ED7"/>
                  </svg>
                </div>
                <h3 className="info-card-title">Office Address</h3>
                <p className="info-card-text">
                  123 Ayala Avenue<br />
                  Makati City, Metro Manila<br />
                  Philippines 1226
                </p>
              </div>

              {/* Phone */}
              <div className="contact-info-card">
                <div className="info-card-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#FE8E0A" opacity="0.1"/>
                    <path d="M16 14C14.9 14 14 14.9 14 16V32C14 33.1 14.9 34 16 34C18 34 30 28 31 27C32 26 34 21 34 16C34 14.9 33.1 14 32 14H16ZM18 18H30V20H18V18ZM18 22H27V24H18V22Z" fill="#FE8E0A"/>
                  </svg>
                </div>
                <h3 className="info-card-title">Phone</h3>
                <p className="info-card-text">
                  Main: +63 2 8888 1234<br />
                  Mobile: +63 917 888 1234<br />
                  Hotline: 1800-1234-RENT
                </p>
              </div>

              {/* Email */}
              <div className="contact-info-card">
                <div className="info-card-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#205ED7" opacity="0.1"/>
                    <path d="M16 16C14.9 16 14 16.9 14 18V30C14 31.1 14.9 32 16 32H32C33.1 32 34 31.1 34 30V18C34 16.9 33.1 16 32 16H16ZM16 18H32V20L24 25L16 20V18Z" fill="#205ED7"/>
                  </svg>
                </div>
                <h3 className="info-card-title">Email</h3>
                <p className="info-card-text">
                  General: info@rentals.ph<br />
                  Support: support@rentals.ph<br />
                  Partnerships: partners@rentals.ph
                </p>
              </div>

              {/* Business Hours */}
              <div className="contact-info-card">
                <div className="info-card-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" fill="#FE8E0A" opacity="0.1"/>
                    <circle cx="24" cy="24" r="10" stroke="#FE8E0A" strokeWidth="2"/>
                    <path d="M24 18V24L28 26" stroke="#FE8E0A" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="info-card-title">Business Hours</h3>
                <p className="info-card-text">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 5:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="contact-map">
              <div className="map-container">
                <div className="map-placeholder">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="60" r="50" fill="#205ED7" opacity="0.1"/>
                    <path d="M60 30C48.96 30 40 38.96 40 50C40 64.2 60 90 60 90C60 90 80 64.2 80 50C80 38.96 71.04 30 60 30ZM60 57C56.68 57 54 54.32 54 51C54 47.68 56.68 45 60 45C63.32 45 66 47.68 66 51C66 54.32 63.32 57 60 57Z" fill="#205ED7"/>
                  </svg>
                  <p className="map-text">View on Google Maps</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="contact-social">
              <h3 className="social-title">Follow Us</h3>
              <div className="social-links">
                <a href="#facebook" className="social-link" aria-label="Facebook">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#205ED7"/>
                    <path d="M22.5 21.25H24.375L25 18.125H22.5V16.5625C22.5 15.7437 22.5 15 24.0625 15H25V12.4437C24.7219 12.4062 23.7906 12.3125 22.8031 12.3125C20.7406 12.3125 19.375 13.4937 19.375 15.8875V18.125H17.1875V21.25H19.375V28.4375H22.5V21.25Z" fill="white"/>
                  </svg>
                </a>
                <a href="#instagram" className="social-link" aria-label="Instagram">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#FE8E0A"/>
                    <path d="M20 15C17.03 15 14.6 17.43 14.6 20.4V22.6C14.6 25.57 17.03 28 20 28H22.2C25.17 28 27.6 25.57 27.6 22.6V20.4C27.6 17.43 25.17 15 22.2 15H20ZM20 16.5H22.2C24.35 16.5 26.1 18.25 26.1 20.4V22.6C26.1 24.75 24.35 26.5 22.2 26.5H20C17.85 26.5 16.1 24.75 16.1 22.6V20.4C16.1 18.25 17.85 16.5 20 16.5ZM23.45 17.45C23.0979 17.45 22.8 17.7479 22.8 18.1C22.8 18.4521 23.0979 18.75 23.45 18.75C23.8021 18.75 24.1 18.4521 24.1 18.1C24.1 17.7479 23.8021 17.45 23.45 17.45ZM21.1 18.5C19.3396 18.5 17.9 19.9396 17.9 21.7C17.9 23.4604 19.3396 24.9 21.1 24.9C22.8604 24.9 24.3 23.4604 24.3 21.7C24.3 19.9396 22.8604 18.5 21.1 18.5ZM21.1 20C21.9604 20 22.7 20.7396 22.7 21.6C22.7 22.4604 21.9604 23.2 21.1 23.2C20.2396 23.2 19.5 22.4604 19.5 21.6C19.5 20.7396 20.2396 20 21.1 20Z" fill="white"/>
                  </svg>
                </a>
                <a href="#twitter" className="social-link" aria-label="Twitter">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#205ED7"/>
                    <path d="M28 15.5C27.4 15.8 26.8 16 26.1 16.1C26.8 15.7 27.3 15.1 27.5 14.3C26.9 14.7 26.2 14.9 25.4 15.1C24.8 14.5 23.9 14 23 14C21.3 14 19.8 15.5 19.8 17.3C19.8 17.6 19.8 17.8 19.9 18C17.3 17.9 15 16.6 13.5 14.7C13.2 15.2 13 15.8 13 16.5C13 17.6 13.6 18.6 14.5 19.2C13.9 19.2 13.4 19 12.9 18.8C12.9 18.8 12.9 18.8 12.9 18.9C12.9 20.5 14.1 21.8 15.6 22.1C15.3 22.2 15 22.2 14.7 22.2C14.5 22.2 14.3 22.2 14.1 22.2C14.5 23.5 15.8 24.4 17.3 24.4C16.1 25.3 14.6 25.8 13 25.8C12.7 25.8 12.5 25.8 12.2 25.8C13.7 26.7 15.5 27.3 17.4 27.3C23 27.3 26.1 22.3 26.1 18C26.1 17.8 26.1 17.6 26.1 17.5C26.8 17 27.4 16.3 28 15.5Z" fill="white"/>
                  </svg>
                </a>
                <a href="#linkedin" className="social-link" aria-label="LinkedIn">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="#FE8E0A"/>
                    <path d="M15.5 14C14.67 14 14 14.67 14 15.5C14 16.33 14.67 17 15.5 17C16.33 17 17 16.33 17 15.5C17 14.67 16.33 14 15.5 14ZM14.25 18V26H16.75V18H14.25ZM19 18V26H21.5V21.75C21.5 19.75 23.5 19.5 23.5 21.75V26H26V21C26 17.5 23 17.25 21.5 19V18H19Z" fill="white"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="contact-faq-section">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">How quickly will I get a response?</h3>
              <p className="faq-answer">
                We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call our hotline.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I schedule a property viewing?</h3>
              <p className="faq-answer">
                Yes! Contact us through the form or call our rent managers directly to schedule a convenient viewing time.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Do you charge consultation fees?</h3>
              <p className="faq-answer">
                No, all consultations with our rent managers are completely free of charge. We're here to help you find your perfect rental.
              </p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">What areas do you cover?</h3>
              <p className="faq-answer">
                We have rental properties across Metro Manila, Cebu, Davao, and other major cities in the Philippines.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ContactUsPage

