import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="min-h-screen">
      <Header initialTransparent />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop&crop=center"
              alt="Professional real estate office environment"
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
                About Terranova
              </h1>
              <p className="text-body-lg text-white/90 max-w-2xl mx-auto">
                More than a Real Estate Agent
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://framerusercontent.com/images/1DvKVpy6gPlZtL3SpcE6uWTvxA.jpg"
                  alt="Terranova - Real Estate Professional"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="heading-lg text-text-primary mb-6">
                  A Passion for Excellence
                </h2>
                
                <div className="space-y-6 text-body text-text-secondary">
                  <p>
                    Terranova Foster has always been driven by a deep interest in architecture and design, 
                    which led her to pursue a career in real estate.
                  </p>
                  
                  <p>
                    After earning a degree in Real Estate & Property Management from the University of 
                    California, Berkeley, she immediately immersed herself in the industry, gaining 
                    valuable experience with top agencies in the region.
                  </p>
                  
                  <p>
                    With over 15 years of experience and more than 250 successful transactions, 
                    Terranova has established herself as one of California's premier real estate professionals.
                  </p>
                  
                  <p>
                    Her commitment to excellence, attention to detail, and deep understanding of the 
                    luxury market make her the ideal partner for your real estate journey.
                  </p>
                </div>

                <div className="mt-8">
                  <motion.a
                    href="/contact"
                    className="btn-primary"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    Let's Connect
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default About