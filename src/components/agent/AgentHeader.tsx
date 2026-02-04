'use client'

import { useState, useEffect } from 'react'
import DashboardHeader from '../common/DashboardHeader'
import { agentsApi } from '../../api'
import type { Agent } from '../../api/endpoints/agents'

interface AgentHeaderProps {
  title?: string
  subtitle?: string
}

function AgentHeader({ title = 'Dashboard', subtitle = 'Welcome back, manage your rental properties.' }: AgentHeaderProps) {
  const [agent, setAgent] = useState<Agent | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAgentData = async () => {
      try {
        const agentId = localStorage.getItem('agent_id')
        if (!agentId) {
          setLoading(false)
          return
        }

        const agentData = await agentsApi.getById(parseInt(agentId))
        setAgent(agentData)
      } catch (error) {
        console.error('Error fetching agent data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAgentData()
  }, [])

  // Get user name from agent data or localStorage or use default
  const userName = agent?.full_name || 
    (agent?.first_name && agent?.last_name 
      ? `${agent.first_name} ${agent.last_name}` 
      : null) ||
    localStorage.getItem('agent_name') || 
    'John Anderson'
  
  // Get avatar fallback initials
  const avatarFallback = agent 
    ? userName.split(' ').map(n => n[0]).join('').toUpperCase() || 'A'
    : 'JA'

  // Get user role
  const userRole = agent?.verified ? 'Rent Manager' : 'Property Agent'
  
  // Get avatar image
  const avatarImage = agent?.image || agent?.avatar || agent?.profile_image || undefined
  
  return (
    <DashboardHeader
      title={title}
      subtitle={subtitle}
      userName={userName}
      userRole={userRole}
      accountRoute="/agent/account"
      avatarFallback={avatarFallback}
      avatarImage={avatarImage}
    />
  )
}

export default AgentHeader

