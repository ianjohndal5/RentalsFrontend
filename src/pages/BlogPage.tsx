import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import './BlogPage.css'

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Market Insights', 'Tips & Guides', 'News', 'Property Reviews', 'Legal']

  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Neighborhoods in Metro Manila for Renters in 2026',
      category: 'Market Insights',
      excerpt: 'Discover the most sought-after neighborhoods in Metro Manila that offer the best value, amenities, and lifestyle for renters this year.',
      date: 'January 20, 2026',
      author: 'Maria Santos',
      readTime: '5 min read',
      image: '/assets/blog-1.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Essential Checklist: What to Look for Before Signing a Lease',
      category: 'Tips & Guides',
      excerpt: 'Learn the critical factors you need to consider before committing to a rental property to ensure a smooth and worry-free experience.',
      date: 'January 18, 2026',
      author: 'John Reyes',
      readTime: '7 min read',
      image: '/assets/blog-2.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Understanding Your Rights as a Tenant in the Philippines',
      category: 'Legal',
      excerpt: 'A comprehensive guide to tenant rights and responsibilities under Philippine law to help you navigate your rental journey confidently.',
      date: 'January 15, 2026',
      author: 'Sarah Dela Cruz',
      readTime: '10 min read',
      image: '/assets/blog-3.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'How to Make Your Rental Property Feel Like Home',
      category: 'Tips & Guides',
      excerpt: 'Transform your rental space into a cozy home with these practical decorating tips and tricks that won\'t violate your lease agreement.',
      date: 'January 12, 2026',
      author: 'Patricia Lim',
      readTime: '6 min read',
      image: '/assets/blog-4.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'The Rise of Co-Living Spaces in Philippine Cities',
      category: 'Market Insights',
      excerpt: 'Explore the growing trend of co-living spaces and how they\'re changing the rental landscape for young professionals and students.',
      date: 'January 10, 2026',
      author: 'Miguel Torres',
      readTime: '8 min read',
      image: '/assets/blog-5.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Budgeting for Your First Rental: Hidden Costs to Consider',
      category: 'Tips & Guides',
      excerpt: 'Beyond the monthly rent, discover the additional expenses you should factor into your budget when renting your first property.',
      date: 'January 8, 2026',
      author: 'Robert Garcia',
      readTime: '6 min read',
      image: '/assets/blog-6.jpg',
      featured: false
    },
    {
      id: 7,
      title: 'New Rental Laws in 2026: What Tenants Need to Know',
      category: 'News',
      excerpt: 'Stay informed about the latest rental regulations and how they affect your rights and obligations as a tenant in the Philippines.',
      date: 'January 5, 2026',
      author: 'Maria Santos',
      readTime: '9 min read',
      image: '/assets/blog-7.jpg',
      featured: false
    },
    {
      id: 8,
      title: 'Comparing Condominiums vs Apartments: Which is Right for You?',
      category: 'Property Reviews',
      excerpt: 'An in-depth comparison of condominiums and apartments to help you decide which type of rental property suits your lifestyle best.',
      date: 'January 3, 2026',
      author: 'John Reyes',
      readTime: '7 min read',
      image: '/assets/blog-8.jpg',
      featured: false
    },
    {
      id: 9,
      title: 'Pet-Friendly Rentals: Finding the Perfect Home for You and Your Furry Friend',
      category: 'Tips & Guides',
      excerpt: 'Tips and strategies for finding pet-friendly rental properties and negotiating pet policies with landlords.',
      date: 'December 28, 2025',
      author: 'Sarah Dela Cruz',
      readTime: '5 min read',
      image: '/assets/blog-9.jpg',
      featured: false
    }
  ]

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPost = blogPosts.find(post => post.featured)

  return (
    <div className="blog-page">
      <Navbar />

      {/* Page Header */}
      <PageHeader title="Blog" />

      {/* Main Content */}
      <main className="blog-main-content">
        {/* Category Filter */}
        <div className="blog-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {selectedCategory === 'All' && featuredPost && (
          <div className="featured-post">
            <div className="featured-post-image">
              <img src={featuredPost.image} alt={featuredPost.title} />
              <div className="featured-badge">Featured</div>
            </div>
            <div className="featured-post-content">
              <div className="post-meta">
                <span className="post-category">{featuredPost.category}</span>
                <span className="post-date">{featuredPost.date}</span>
              </div>
              <h2 className="featured-post-title">{featuredPost.title}</h2>
              <p className="featured-post-excerpt">{featuredPost.excerpt}</p>
              <div className="post-footer">
                <div className="post-author-info">
                  <span className="author-name">By {featuredPost.author}</span>
                  <span className="read-time">{featuredPost.readTime}</span>
                </div>
                <button className="read-more-btn">Read Article</button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Grid */}
        <div className="blog-posts-grid">
          {filteredPosts.filter(post => !post.featured || selectedCategory !== 'All').map((post) => (
            <article key={post.id} className="blog-post-card">
              <div className="blog-post-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-post-content">
                <div className="post-meta">
                  <span className="post-category">{post.category}</span>
                  <span className="post-date">{post.date}</span>
                </div>
                <h3 className="blog-post-title">{post.title}</h3>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <div className="post-footer">
                  <div className="post-author-info">
                    <span className="author-name">By {post.author}</span>
                    <span className="read-time">{post.readTime}</span>
                  </div>
                  <button className="read-more-btn-small">Read More →</button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="blog-newsletter-section">
          <div className="newsletter-content">
            <div className="newsletter-icon">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="#FE8E0A" opacity="0.2"/>
                <path d="M15 20C13.35 20 12 21.35 12 23V37C12 38.65 13.35 40 15 40H45C46.65 40 48 38.65 48 37V23C48 21.35 46.65 20 45 20H15ZM15 23H45V25.5L30 32.5L15 25.5V23Z" fill="#FE8E0A"/>
              </svg>
            </div>
            <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
            <p className="newsletter-text">
              Get the latest rental tips, market insights, and exclusive property listings delivered to your inbox every week.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default BlogPage

