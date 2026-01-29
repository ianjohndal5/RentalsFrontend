import { Link } from 'react-router-dom'
import AgentSidebar from '../../components/agent/AgentSidebar'

import { 
  FiBell,
  FiDownload,
  FiFileText,
  FiBarChart2,
  FiImage,
  FiUser,
  FiMail,
  FiEdit3,
  FiCreditCard,
  FiLock,
  FiLogOut,
  FiPlus,
  FiList,
  FiBookOpen
} from 'react-icons/fi'
import './AgentDownloadables.css'

function AgentDownloadables() {
  const handleDownload = (type: string) => {
    // Handle download logic here
    console.log(`Downloading ${type}`)
  }

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
              <p className="welcome-text">Welcome back, manage your rental properties</p>
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

        {/* Downloadables Section */}
        <div className="downloadables-section">
          <h2 className="downloadables-title">Downloadables</h2>
          
          <div className="downloadables-list">
            {/* Lease Agreements Card */}
            <div className="downloadable-card">
              <div className="downloadable-icon-container">
                <FiFileText className="downloadable-icon" />
              </div>
              <div className="downloadable-content">
                <h3 className="downloadable-name">Lease Agreements</h3>
              </div>
              <button 
                className="download-button"
                onClick={() => handleDownload('lease-agreements')}
                aria-label="Download Lease Agreements"
              >
                <FiDownload className="download-icon" />
              </button>
            </div>

            {/* Financial Report Card */}
            <div className="downloadable-card">
              <div className="downloadable-icon-container">
                <FiBarChart2 className="downloadable-icon" />
              </div>
              <div className="downloadable-content">
                <h3 className="downloadable-name">Financial Report</h3>
              </div>
              <button 
                className="download-button"
                onClick={() => handleDownload('financial-report')}
                aria-label="Download Financial Report"
              >
                <FiDownload className="download-icon" />
              </button>
            </div>

            {/* Property Photos Card */}
            <div className="downloadable-card">
              <div className="downloadable-icon-container">
                <FiImage className="downloadable-icon" />
              </div>
              <div className="downloadable-content">
                <h3 className="downloadable-name">Property Photos</h3>
              </div>
              <button 
                className="download-button"
                onClick={() => handleDownload('property-photos')}
                aria-label="Download Property Photos"
              >
                <FiDownload className="download-icon" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AgentDownloadables

