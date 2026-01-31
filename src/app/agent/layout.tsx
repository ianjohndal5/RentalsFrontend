// Force dynamic rendering for all agent routes
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

