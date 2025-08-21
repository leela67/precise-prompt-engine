import { ArrowRight, Bed, Bath } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
            <motion.div
              key={property.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
                {/* Property Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={property.image}
                    alt={property.address}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Status and Dot on Right Side */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-white text-text-primary rounded-full">
                      {property.status}
                    </span>
                  </div>
                </div>

                {/* Property Details - No bottom border */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary-600 transition-colors">
                      {property.price}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {property.address}
                    </p>
                  </div>

                  {/* Property Features */}
                  <div className="flex items-center gap-4 text-text-muted text-sm">
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>{property.bathrooms} Bathrooms</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/featured-properties" className="btn-primary">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListingsSection;