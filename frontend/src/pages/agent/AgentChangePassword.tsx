import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AgentSidebar from '../../components/agent/AgentSidebar'
import { 
  FiBell,
  FiMail,
  FiUser,
  FiDownload,
  FiCreditCard,
  FiLock,
  FiLogOut,
  FiPlus,
  FiList,
  FiBarChart2,
  FiFileText,
  FiEdit3,
  FiBookOpen
} from 'react-icons/fi'
import './AgentChangePassword.css'

function AgentChangePassword() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    if (formData.newPassword !== formData.confirmPassword) {
      alert('New password and confirm password do not match')
      return
    }
    console.log('Password change submitted:', formData)
    // Add API call here
  }

  const handleCancel = () => {
    navigate('/agent')
  }

  return (
    <div className="agent-change-password">
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

        {/* Change Password Content */}
        <div className="change-password-content">
          <div className="change-password-header">
            <h2>Change Password</h2>
          </div>

          <form onSubmit={handleSubmit} className="change-password-form">
            <div className="form-group">
              <label htmlFor="currentPassword">Current Password</label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                className="form-input"
                placeholder="Current password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                className="form-input"
                placeholder="New password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="form-input"
                placeholder="Confirm new password"
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary">
                Change Password
              </button>
              <button type="button" onClick={handleCancel} className="btn-secondary">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default AgentChangePassword

