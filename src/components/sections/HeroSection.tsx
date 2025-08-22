import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '@/assets/hero-living-room.jpg'

const DoubleArrowDown = () => (
  <motion.div
    className="flex flex-col items-center space-y-1"
    animate={{
      y: [0, 8, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }}
  >
    <ChevronDown className="w-4 h-4 text-text-inverse" />
    <ChevronDown className="w-4 h-4 text-text-inverse -mt-2" />
  </motion.div>
)

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Luxury modern living room with contemporary furniture and natural lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Overline */}
        <motion.p
          variants={itemVariants}
          className="text-overline text-text-inverse mb-6 tracking-widest"
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          YOUR NEXT MOVE STARTS HERE
        </motion.p>
        
        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="heading-hero mb-6"
        >
          Olivia Sinclair
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-subtitle mb-12"
        >
          California Real Estate
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/featured-properties" className="btn-primary">
            View Properties
          </Link>
          <Link
            to="/contact"
            className="btn-secondary text-text-inverse border-text-inverse hover:bg-text-inverse hover:text-text-primary"
          >
            Let's Connect
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <DoubleArrowDown />
      </div>
    </section>
  )
}

export default HeroSection