import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './AppSidebar.css'
import {
  FiMail,
  FiDownload,
  FiCreditCard,
  FiHome,
  FiList,
  FiBarChart2,
  FiFileText,
  FiBookOpen,
  FiLayout,
  FiUsers,
  FiDollarSign,
  FiLayers,
  FiMessageCircle,
} from 'react-icons/fi'


function AppSidebar() {
  const location = useLocation()
  const [hasUnreadMessages, setHasUnreadMessages] = useState(false)
  
  // Determine if we're on admin or agent routes
  const isAdminRoute = location.pathname.startsWith('/admin')
  const isAgentRoute = location.pathname.startsWith('/agent')

  useEffect(() => {
    // Only check unread messages for agent routes
    if (!isAgentRoute) return

    const checkUnreadMessages = () => {
      // Check if account is processing (this would show as a notification in inbox)
      const registrationStatus = localStorage.getItem('agent_registration_status')
      const agentStatus = localStorage.getItem('agent_status')
      
      let hasUnread = false
      
      if (registrationStatus === 'processing' || 
          agentStatus === 'processing' || 
          agentStatus === 'pending' || 
          agentStatus === 'under_review') {
        hasUnread = true
      }

      // Check for unread messages count
      const unreadCount = localStorage.getItem('unread_messages_count')
      if (unreadCount && parseInt(unreadCount) > 0) {
        hasUnread = true
      }

      setHasUnreadMessages(hasUnread)
    }

    // Check initially
    checkUnreadMessages()

    // Listen for storage changes (when inbox updates unread count)
    window.addEventListener('storage', checkUnreadMessages)
    
    // Also check periodically in case localStorage is updated in the same window
    const interval = setInterval(checkUnreadMessages, 1000)

    return () => {
      window.removeEventListener('storage', checkUnreadMessages)
      clearInterval(interval)
    }
  }, [isAgentRoute])

  const isActive = (path: string) => {
    if (path === '/agent') {
      // For create listing pages, check if we're on any create-listing route
      return location.pathname === '/agent' ||
        location.pathname === '/agent/' ||
        location.pathname.startsWith('/agent/create-listing')
    }
    if (path === '/admin') {
      return location.pathname === '/admin' || location.pathname === '/admin/'
    }
    return location.pathname === path || location.pathname.startsWith(path + '/')
  }

  // Agent sidebar content
  const renderAgentSidebar = () => (
    <>
      <Link
        to="/"
        className={`nav-item ${isActive('/') && !location.pathname.includes('//') ? 'active' : ''}`}
      >
        <FiLayout className="nav-icon" />
        <span>Home</span>
      </Link>
      <Link
        to="/agent"
        className={`nav-item ${isActive('/agent') && !location.pathname.includes('/agent/') ? 'active' : ''}`}
      >
        <FiHome className="nav-icon" />
        <span>Dashboard</span>
      </Link>
      <Link
        to="/agent/inbox"
        className={`nav-item ${isActive('/agent/inbox') ? 'active' : ''}`}
      >
        <div className="nav-icon-wrapper">
          <FiMail className="nav-icon" />
          {hasUnreadMessages && <span className="inbox-indicator"></span>}
        </div>
        <span>Inbox</span>
      </Link>
      <Link
        to="/agent/downloadables"
        className={`nav-item ${isActive('/agent/downloadables') ? 'active' : ''}`}
      >
        <FiDownload className="nav-icon" />
        <span>Downloadables</span>
      </Link>
      <Link
        to="/agent/digital-card"
        className={`nav-item ${isActive('/agent/digital-card') ? 'active' : ''}`}
      >
        <FiCreditCard className="nav-icon" />
        <span>Digital Business Card</span>
      </Link>

      <div className="nav-section">
        <h2 className="nav-section-title">Rent Management</h2>
        <Link
          to="/agent/listings"
          className={`nav-item ${isActive('/agent/listings') ? 'active' : ''}`}
        >
          <FiList className="nav-icon" />
          <span>My Listings</span>
        </Link>
        <Link
          to="/agent/tracker"
          className={`nav-item ${isActive('/agent/tracker') ? 'active' : ''}`}
        >
          <FiBarChart2 className="nav-icon" />
          <span>Rental Tracker</span>
        </Link>
        <Link
          to="/agent/rent-estimate"
          className={`nav-item ${isActive('/agent/rent-estimate') ? 'active' : ''}`}
        >
          <FiFileText className="nav-icon" />
          <span>Rent Estimate</span>
        </Link>
        <Link
          to="/agent/blogs"
          className={`nav-item ${isActive('/agent/blogs') ? 'active' : ''}`}
        >
          <FiBookOpen className="nav-icon" />
          <span>Share Blogs</span>
        </Link>
      </div>

      <div className="nav-section public-pages-section">
        <h3 className="nav-section-title">Public Pages</h3>
        <a href="/" target="_blank" rel="noopener noreferrer" className="nav-item">
          <FiHome className="nav-icon" />
          <span>Home</span>
        </a>
        <a href="/properties" target="_blank" rel="noopener noreferrer" className="nav-item">
          <FiLayers className="nav-icon" />
          <span>Properties</span>
        </a>
        <a href="/rent-managers" target="_blank" rel="noopener noreferrer" className="nav-item">
          <FiUsers className="nav-icon" />
          <span>Rent Managers</span>
        </a>
        <a href="/blog" target="_blank" rel="noopener noreferrer" className="nav-item">
          <FiBookOpen className="nav-icon" />
          <span>Blog</span>
        </a>
        <a href="/about" target="_blank" rel="noopener noreferrer" className="nav-item">
          <FiLayout className="nav-icon" />
          <span>About</span>
        </a>
        <a href="/contact" target="_blank" rel="noopener noreferrer" className="nav-item">
          <FiMessageCircle className="nav-icon" />
          <span>Contact</span>
        </a>
      </div>
    </>
  )

  // Admin sidebar content
  const renderAdminSidebar = () => (
    <>
      <Link
        to="/admin"
        className={`nav-item ${isActive('/admin') ? 'active' : ''}`}
      >
        <FiHome className="nav-icon" />
        <span>Dashboard</span>
      </Link>
      <Link
        to="/admin/agents"
        className={`nav-item ${isActive('/admin/agents') ? 'active' : ''}`}
      >
        <FiUsers className="nav-icon" />
        <span>Agents</span>
      </Link>
      <Link
        to="/admin/properties"
        className={`nav-item ${isActive('/admin/properties') ? 'active' : ''}`}
      >
        <FiLayers className="nav-icon" />
        <span>Properties</span>
      </Link>
      <Link
        to="/admin/revenue"
        className={`nav-item ${isActive('/admin/revenue') ? 'active' : ''}`}
      >
        <FiDollarSign className="nav-icon" />
        <span>Revenue</span>
      </Link>

      <div className="nav-section public-pages-section">
        <h3 className="nav-section-title">Public Pages</h3>
        <a href="/" target="_blank" rel="noopener noreferrer" className="nav-item">
          <FiHome className="nav-icon" />
          <span>Home</span>
        </a>
        <a href="/properties" target="_blank" rel="noopener noreferrer" className="nav-item">
          <FiLayers className="nav-icon" />
          <span>Properties</span>
        </a>
        <a href="/rent-managers" target="_blank" rel="noopener noreferrer" className="nav-item">
          <FiUsers className="nav-icon" />
          <span>Rent Managers</span>
        </a>
        <a href="/blog" target="_blank" rel="noopener noreferrer" className="nav-item">
          <FiBookOpen className="nav-icon" />
          <span>Blog</span>
        </a>
        <a href="/about" target="_blank" rel="noopener noreferrer" className="nav-item">
          <FiLayout className="nav-icon" />
          <span>About</span>
        </a>
        <a href="/contact" target="_blank" rel="noopener noreferrer" className="nav-item">
          <FiMessageCircle className="nav-icon" />
          <span>Contact</span>
        </a>
      </div>
    </>
  )

  return (
    <aside className={`app-sidebar ${isAdminRoute ? 'admin-sidebar' : 'agent-sidebar'}`}>
      <div className="sidebar-logo">
        <div className="logo-container">
          <img
            src="/assets/rentals-logo-hero-13c7b5.png"
            alt="Rentals.ph logo"
            className="logo-image"
          />
        </div>
      </div>

      <nav className="sidebar-nav">
        {isAdminRoute ? renderAdminSidebar() : renderAgentSidebar()}
      </nav>
    </aside>
  )
}

export default AppSidebar

