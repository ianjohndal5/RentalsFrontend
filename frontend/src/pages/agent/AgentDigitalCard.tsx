import { Link } from 'react-router-dom'
import AgentSidebar from '../../components/agent/AgentSidebar'

import { 
  FiBell,
  FiUser,
  FiMail,
  FiPhone,
  FiLogOut,
  FiEdit3,
  FiDownload,
  FiCreditCard,
  FiLock,
  FiList,
  FiBarChart2,
  FiFileText,
  FiBookOpen,
  FiPlus
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import './AgentDigitalCard.css'

function AgentDigitalCard() {
  return (
    <div className="agent-dashboard">
      <AgentSidebar/>

      {/* Main Content */}
      <main className="agent-main">
        {/* Header */}
        <header className="agent-header">
          <div className="header-content">
            <div>
              <h1>Dashboard</h1>
              <p className="welcome-text">Welcome back, manage your rental properties.</p>
            </div>
            <div className="header-right">
              <FiBell className="notification-icon" />
              <div className="user-profile">
                <div className="profile-avatar">
                  <img src="/assets/profile-placeholder.png" alt="John Anderson" onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }} />
                  <div className="avatar-fallback hidden">JA</div>
                </div>
                <div className="user-info">
                  <span className="user-name">John Anderson</span>
                  <span className="user-role">Property Owner</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Digital Business Card Section */}
        <div className="digital-card-section">
          <h2 className="section-title">Digital Business Card</h2>
          
          <div className="business-card-container">
            <div className="business-card">
              {/* Profile Image */}
              <div className="card-profile-image">
                <img 
                  src="/assets/profile-placeholder.png" 
                  alt="John Anderson"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="card-avatar-fallback hidden">JA</div>
              </div>

              {/* Name */}
              <h3 className="card-name">John Anderson</h3>

              {/* Title */}
              <p className="card-title">Rent Manager</p>

              {/* Tenure */}
              <p className="card-tenure">Since 2014</p>

              {/* Contact Information */}
              <div className="card-contact-info">
                <div className="contact-item">
                  <FiPhone className="contact-icon phone-icon" />
                  <span className="contact-text">+63 9876543210</span>
                </div>
                <div className="contact-item">
                  <FaWhatsapp className="contact-icon whatsapp-icon" />
                  <span className="contact-text">+63 9876543210</span>
                </div>
                <div className="contact-item">
                  <FiMail className="contact-icon email-icon" />
                  <span className="contact-text">johnanderson@gmail.com</span>
                </div>
              </div>

              {/* QR Code */}
              <div className="card-qr-container">
                <div className="card-qr-code"></div>
                <p className="qr-instruction">Scan to view my profile</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AgentDigitalCard

