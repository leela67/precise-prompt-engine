import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ScrollScaleImage } from '@/components/ScrollScaleImage'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { properties } from '@/data/properties'

const FeaturedProperties = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main >
        {/* Hero Section */}
        <section className="relative min-h-[100svh] md:min-h-[100dvh] flex items-center justify-center overflow-hidden">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property, index) => (
                <motion.div
                  key={property.id}
                  className="h-full"                                 // ⬅️ make grid cell stretch
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={`/properties/${property.id}`} className="group block h-full">
                    <div className="card-elevated overflow-hidden cursor-pointer h-full flex flex-col">
                      {/* Image stays a fixed ratio so every card starts same height */}
                      <ScrollScaleImage className="relative aspect-[3/2] overflow-hidden shrink-0">
                        <img
                          src={property.images[0]}
                          alt={property.address}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading={index < 3 ? "eager" : "lazy"}
                        />

                        {/* Status Badge */}
                        <div className="absolute top-4 right-4 flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span className="bg-white/90 backdrop-blur-sm text-text-primary text-xs font-medium px-3 py-1 rounded-full">
                            For Sale
                          </span>
                        </div>
                      </ScrollScaleImage>

                      {/* Content area grows to fill and lines up across cards */}
                      <div className="p-6 flex flex-col gap-3 grow">
                        {/* Fix title height to 2 lines max */}
                        <h3 className="text-lg font-medium text-text-primary group-hover:text-primary transition-colors duration-200 line-clamp-2 leading-snug min-h-[3.25rem]">
                          {property.address}
                        </h3>

                        {/* Push meta row to the bottom for perfect alignment */}
                        <div className="mt-auto flex items-center space-x-4 text-sm text-text-secondary">
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