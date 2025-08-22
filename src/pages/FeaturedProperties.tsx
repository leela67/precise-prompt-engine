import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'

const properties = [
  {
    id: '780-palm-island-drive',
    image: 'https://framerusercontent.com/images/KZqHQIaOcB8SVKNqIOEuVsHK3c.jpg',
    status: 'For Sale',
    address: '780 Palm Island Drive, Miami Beach, FL',
    bedrooms: 6,
    bathrooms: 7.5,
    price: '$8,750,000'
  },
  {
    id: '1425-sunset-plaza',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    status: 'For Sale',
    address: '1425 Sunset Plaza Drive, West Hollywood, CA',
    bedrooms: 4,
    bathrooms: 5,
    price: '$5,950,000'
  },
  {
    id: '2870-benedict-canyon',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    status: 'For Sale',
    address: '2870 Benedict Canyon Drive, Beverly Hills, CA',
    bedrooms: 5,
    bathrooms: 6,
    price: '$12,500,000'
  }
]

const FeaturedProperties = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1920&h=1080&fit=crop&crop=center"
              alt="Luxury properties and real estate portfolio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="heading-display text-white mb-6">
                Featured Properties
              </h1>
              <p className="text-body-lg text-white/90 max-w-2xl mx-auto">
                Discover our carefully curated collection of luxury properties in California's most desirable locations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property, index) => (
                <motion.div
                  key={property.id}
                  className="group card-elevated overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.address}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 flex items-center">
                      <span className="bg-white/90 backdrop-blur-sm text-text-primary text-xs font-medium px-3 py-1 rounded-full">
                        {property.status}
                      </span>
                      <div className="w-2 h-2 bg-green-500 rounded-full ml-2"></div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-medium text-text-primary mb-2">
                      {property.address}
                    </h3>
                    
                    <div className="flex items-center space-x-4 text-sm text-text-secondary mb-4">
                      <span>{property.bedrooms} Bedrooms</span>
                      <span>•</span>
                      <span>{property.bathrooms} Bathrooms</span>
                    </div>
                    
                    <div className="text-2xl font-light text-text-primary font-serif">
                      {property.price}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default FeaturedProperties