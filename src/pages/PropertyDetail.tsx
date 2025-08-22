import { useParams, Navigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PropertyCarousel from '@/components/PropertyCarousel';
import { getPropertyById } from '@/data/properties';
import { motion } from 'framer-motion';
import { Bed, Bath, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  if (!id) {
    return <Navigate to="/featured-properties" replace />;
  }

  const property = getPropertyById(id);

  if (!property) {
    return <Navigate to="/featured-properties" replace />;
  }

  return (
    <div className="min-h-screen">
      <Header initialTransparent />
      
      <main className="pt-20">
        {/* Back Navigation */}
        <section className="py-6 border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link 
              to="/featured-properties"
              className="inline-flex items-center text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Featured Properties
            </Link>
          </div>
        </section>

        {/* Property Carousel */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <PropertyCarousel 
                images={property.images} 
                alt={property.title}
              />
            </motion.div>
          </div>
        </section>

        {/* Property Information */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h1 className="heading-lg text-text-primary mb-4">
                    {property.title}
                  </h1>
                  
                  <p className="text-body-lg text-text-secondary mb-6">
                    {property.address}
                  </p>

                  {/* Property Stats */}
                  <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Bed className="w-5 h-5" />
                      <span className="text-body">{property.bedrooms} Bedrooms</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary">
                      <Bath className="w-5 h-5" />
                      <span className="text-body">{property.bathrooms} Bathrooms</span>
                    </div>
                  </div>

                  {/* Description */}
                  {property.description && (
                    <div className="mb-8">
                      <h2 className="heading-sm text-text-primary mb-4">
                        Description
                      </h2>
                      <p className="text-body text-text-secondary leading-relaxed">
                        {property.description}
                      </p>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Sidebar with Details */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="sticky top-24"
                >
                  <div className="card-elevated p-6">
                    <h3 className="heading-sm text-text-primary mb-6">
                      Property Details
                    </h3>
                    
                    {property.details && property.details.length > 0 && (
                      <div className="space-y-4">
                        {property.details.map((detail, index) => (
                          <div 
                            key={index} 
                            className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                          >
                            <span className="text-body text-text-secondary">
                              {detail.label}
                            </span>
                            <span className="text-body font-medium text-text-primary">
                              {detail.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <Link
                        to="/contact"
                        className="btn-primary w-full text-center block"
                      >
                        Schedule Viewing
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PropertyDetail;