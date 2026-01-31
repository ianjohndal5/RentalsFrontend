'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AgentCreateListing() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to streamlined basic info page
    router.push('/agent/create-listing/basic-info')
  }, [router])

  return null
}

