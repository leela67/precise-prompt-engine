import { ArrowRight, Bed, Bath, DollarSign } from 'lucide-react';

const FeaturedListingsSection = () => {
  const properties = [
    {
      id: '1',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=center',
      status: 'For Sale',
      address: '780 Palm Island Drive, Miami Beach, FL',
      bedrooms: 6,
      bathrooms: 7.5,
      price: '$8,750,000'
    },
    {
      id: '2',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=center',
      status: 'For Sale',
      address: '150 Central Park South, New York, NY',
      bedrooms: 3,
      bathrooms: 4,
      price: '$5,150,000'
    },
    {
      id: '3',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop&crop=center',
      status: 'For Sale',
      address: '245 Oceanview Drive, Malibu, California',
      bedrooms: 5,
      bathrooms: 5.5,
      price: '$4,750,000'
    }
  ];

  return (
    <section id="properties" className="py-24 section-elevated">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-overline text-text-muted mb-4">
            Handpicked Just for You
          </p>
          <h2 className="heading-lg text-text-primary">
            Featured Listings
          </h2>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div 
              key={property.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-elevated overflow-hidden">
                {/* Property Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={property.image}
                    alt={property.address}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-white/90 text-text-primary rounded-full">
                      {property.status}
                    </span>
                  </div>
                </div>

                {/* Property Details */}
                <div className="p-6">
                  <h3 className="font-medium text-text-primary mb-4 group-hover:text-brand-secondary transition-colors">
                    {property.address}
                  </h3>
                  
                  {/* Property Features */}
                  <div className="flex items-center gap-6 mb-4 text-text-secondary">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span className="text-sm">{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span className="text-sm">{property.bathrooms} Bathrooms</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-5 w-5 text-brand-secondary" />
                      <span className="text-xl font-semibold text-text-primary">
                        {property.price}
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-text-muted group-hover:text-brand-secondary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a href="#properties" className="btn-primary">
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListingsSection;