import DashboardHeader from '../common/DashboardHeader'

interface AgentHeaderProps {
  title?: string
  subtitle?: string
}

function AgentHeader({ title = 'Dashboard', subtitle = 'Welcome back, manage your rental properties.' }: AgentHeaderProps) {
  // Get user name from localStorage or use default
  const userName = localStorage.getItem('agent_name') || 'John Anderson'
  
  return (
    <DashboardHeader
      title={title}
      subtitle={subtitle}
      userName={userName}
      userRole="Property Owner"
      accountRoute="/agent/account"
      avatarFallback="JA"
    />
  )
}

export default AgentHeader

