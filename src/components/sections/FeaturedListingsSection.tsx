import { Bed, Bath } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FeaturedListingsSection = () => {
  const properties = [
    {
      id: 'naysha',
      image: '../../../images/Nyhsha/Screenshot 2025-08-17 at 5.57.31ÔÇ»PM.png',
      status: 'For Sale',
      address: 'Naysha - Premium Residential Complex, Hyderabad',
      bedrooms: 3,
      bathrooms: 3,
      description: 'Modern luxury apartments with contemporary design and premium amenities in the heart of Hyderabad.'
    },
    {
      id: 'golden-palm',
      image: '/images/The Golden Palm/Screenshot 2025-08-17 at 6.01.46ÔÇ»PM.png',
      status: 'For Sale',
      address: 'The Golden Palm - Luxury Villas, Hyderabad',
      bedrooms: 4,
      bathrooms: 4,
      description: 'Exclusive villa community offering spacious homes with world-class facilities and serene surroundings.'
    },
    {
      id: 'silver-leaf',
      image: '/images/The Silver Leaf/Screenshot 2025-08-17 at 6.05.34ÔÇ»PM.png',
      status: 'For Sale',
      address: 'The Silver Leaf - Elite Residences, Hyderabad',
      bedrooms: 2,
      bathrooms: 2,
      description: 'Sophisticated residential towers featuring elegant design and premium lifestyle amenities.'
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
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link to={`/property/${property.id}`} className="block">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                {/* Property Image */}
                <div className="relative overflow-hidden aspect-[3/2]">
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

                {/* Property Details - No price display */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-primary-600 transition-colors">
                      {property.address}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {property.description}
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
              </Link>
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