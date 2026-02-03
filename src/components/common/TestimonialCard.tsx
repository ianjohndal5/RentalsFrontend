import './TestimonialCard.css'

interface TestimonialCardProps {
  avatar: string
  text: string
  name: string
  role: string
}

function TestimonialCard({
  avatar,
  text,
  name,
  role,
}: TestimonialCardProps) {
  return (
    <article className="testimonial-card">
      <img
        src={avatar}
        alt={name}
        className="testimonial-avatar"
      />
      <div className="testimonial-content">
        <div className="testimonial-quote-text-wrapper">
          <div className="testimonial-quote-icon-small">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" fill="#4A90E2"/>
              <path d="M7.5 10.5C7.5 9 9 7.5 10.5 7.5C12 7.5 13.5 9 13.5 10.5C13.5 12 12 13.5 10.5 13.5C9.75 13.5 9 13.2 8.4 12.9V15H7.5V10.5Z" fill="white"/>
              <path d="M16.5 10.5C16.5 9 18 7.5 19.5 7.5C21 7.5 22.5 9 22.5 10.5C22.5 12 21 13.5 19.5 13.5C18.75 13.5 18 13.2 17.4 12.9V15H16.5V10.5Z" fill="white"/>
            </svg>
          </div>
          <p className="testimonial-text">{text}</p>
        </div>
        <div className="testimonial-author">
          <h3 className="testimonial-name">{name}</h3>
          <p className="testimonial-role">{role}</p>
        </div>
      </div>
    </article>
  )
}

export default TestimonialCard

