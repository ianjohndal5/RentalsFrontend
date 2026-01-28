import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, AboutPage, PropertiesForRentPage, RentManagersPage, RentManagerDetailsPage, BlogPage, BlogDetailsPage, ContactUsPage, PropertyDetailsPage, NewsPage, AdminDashboard, AgentsPage, PropertiesPage, RevenuePage } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/properties" element={<PropertiesForRentPage />} />
        <Route path="/property/:id" element={<PropertyDetailsPage />} />
        <Route path="/rent-managers" element={<RentManagersPage />} />
        <Route path="/rent-managers/:id" element={<RentManagerDetailsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/agents" element={<AgentsPage />} />
        <Route path="/admin/properties" element={<PropertiesPage />} />
        <Route path="/admin/revenue" element={<RevenuePage />} />
      </Routes>
    </Router>
  )
}

export default App
