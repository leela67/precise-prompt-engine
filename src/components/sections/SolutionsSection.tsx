import { ArrowRight } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      title: 'Our Properties',
      description: 'Explore our curated collection of premium properties',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=600&fit=crop&crop=center',
      href: '#properties'
    },
    {
      title: 'Past Transactions',
      description: 'View our successful real estate transactions',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=600&fit=crop&crop=center',
      href: '#transactions'
    },
    {
      title: 'Let\'s Connect',
      description: 'Get in touch to discuss your real estate needs',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=600&fit=crop&crop=center',
      href: '#contact'
    }
  ];

  return (
    <section className="py-24 section-neutral">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-overline text-text-muted mb-4">
            How Can We Help?
          </p>
          <h2 className="heading-lg text-text-primary">
            Explore Our Solutions
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={solution.title}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a href={solution.href} className="block">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="heading-sm mb-2 group-hover:text-brand-accent transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm opacity-90 mb-4">
                      {solution.description}
                    </p>
                    <div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                      <span className="mr-2">Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;