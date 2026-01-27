import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage, AboutPage, PropertiesForRentPage, RentManagersPage, BlogPage, ContactUsPage } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/properties" element={<PropertiesForRentPage />} />
        <Route path="/rent-managers" element={<RentManagersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </Router>
  )
}

export default App
