import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ScrollScaleImage } from '@/components/ScrollScaleImage'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { properties } from '@/data/properties'

const FeaturedProperties = () => {
  return (
    <div className="min-h-screen">
      <Header initialTransparent />
      
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
                Discover our carefully curated collection of luxury properties in Hyderabad's most desirable locations.
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
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={`/properties/${property.id}`} className="group block">
                    <div className="card-elevated overflow-hidden cursor-pointer">
                      <ScrollScaleImage className="relative aspect-[3/2] overflow-hidden">
                        <img
                          src={property.images[0]}
                          alt={property.address}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading={index < 3 ? "eager" : "lazy"}
                        />
                        
                        {/* Status Badge - positioned to the right */}
                        <div className="absolute top-4 right-4 flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span className="bg-white/90 backdrop-blur-sm text-text-primary text-xs font-medium px-3 py-1 rounded-full">
                            For Sale
                          </span>
                        </div>
                      </ScrollScaleImage>
                      
                      <div className="p-6">
                        <h3 className="text-lg font-medium text-text-primary mb-2 group-hover:text-primary transition-colors duration-200">
                          {property.address}
                        </h3>
                        
                        <div className="flex items-center space-x-4 text-sm text-text-secondary">
                          <span>{property.bedrooms} Bedrooms</span>
                          <span>•</span>
                          <span>{property.bathrooms} Bathrooms</span>
                        </div>
                      </div>
                    </div>
                  </Link>
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