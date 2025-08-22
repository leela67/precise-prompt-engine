import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "First-Time Homebuyer? Here's What You Need to Know",
      date: "Feb 26, 2025",
      excerpt: "Essential tips and guidance for first-time homebuyers navigating the real estate market.",
      image: "/api/placeholder/400/250",
      category: "Buying Tips"
    },
    {
      id: 2,
      title: "5 Key Trends Shaping the Real Estate Market in 2025",
      date: "Dec 3, 2024",
      excerpt: "Discover the latest trends and market insights that are defining real estate in 2025.",
      image: "/api/placeholder/400/250",
      category: "Market Trends"
    },
    {
      id: 3,
      title: "5 Key Tips to Sell Your Property Faster and at the Best Price",
      date: "Jan 28, 2025",
      excerpt: "Proven strategies to maximize your property's value and reduce time on market.",
      image: "/api/placeholder/400/250",
      category: "Selling Tips"
    },
    {
      id: 4,
      title: "Understanding Property Investment in California",
      date: "Jan 15, 2025",
      excerpt: "A comprehensive guide to real estate investment opportunities in California.",
      image: "/api/placeholder/400/250",
      category: "Investment"
    },
    {
      id: 5,
      title: "Luxury Home Features That Add Value",
      date: "Jan 10, 2025",
      excerpt: "Discover which luxury features provide the best return on investment.",
      image: "/api/placeholder/400/250",
      category: "Luxury Homes"
    },
    {
      id: 6,
      title: "Navigating the California Real Estate Market",
      date: "Dec 20, 2024",
      excerpt: "Expert insights into California's unique real estate landscape and opportunities.",
      image: "/api/placeholder/400/250",
      category: "Market Analysis"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=center"
              alt="Real estate market insights and trends"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <div>
              <h1 className="heading-display text-white mb-6">
                Latest Insights & Market Trends
              </h1>
              <p className="text-body-lg text-white/90 max-w-3xl mx-auto">
                Real Estate Tips & Expert Advice
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-text-muted">
                      <span className="bg-neutral-100 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-text-primary group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-text-secondary leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="pt-2">
                      <span className="text-primary-600 font-medium group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-neutral-50">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="heading-lg text-text-primary mb-4">
              Stay Updated on the Market
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Get exclusive real estate insights, market trends, and property updates straight to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-text-primary text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
