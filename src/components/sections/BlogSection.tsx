import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const posts = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center',
      date: 'Feb 26, 2025',
      title: 'First-Time Homebuyer? Here\'s What You Need to Know'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop&crop=center',
      date: 'Dec 3, 2024',
      title: '5 Key Trends Shaping the Real Estate Market in 2025'
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&crop=center',
      date: 'Jan 28, 2025',
      title: '5 Key Tips to Sell Your Property Faster and at the Best Price'
    }
  ];

  return (
    <section className="py-24 section-elevated">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-overline text-text-muted mb-4">
            Latest Insights & Market Trends
          </p>
          <h2 className="heading-lg text-text-primary">
            Real Estate Tips & Expert Advice
          </h2>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={post.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-elevated overflow-hidden">
                {/* Post Image */}
                <div className="relative overflow-hidden aspect-[3/2]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-text-muted">
                    <Calendar className="h-4 w-4" />
                    <time className="text-sm">{post.date}</time>
                  </div>
                  
                  <h3 className="font-medium text-text-primary mb-4 group-hover:text-brand-secondary transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <div className="flex items-center text-sm font-medium text-brand-secondary group-hover:text-brand-primary transition-colors">
                    <span className="mr-2">Read More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="#blog" className="btn-primary">
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;