import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollDirection } from '@/hooks/useScrollDirection'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollDirection } = useScrollDirection()
  
  // Determine if we should show transparent header based on scroll position
  // All pages should have transparent header when at the top
  const shouldBeTransparent = scrollDirection === 'top'
  

  const navigation = [
    { name: 'Featured Properties', href: '/featured-properties' },
    { name: 'About Us', href: '/about' },
    { name: "Let's Connect", href: '/contact' }
  ]


  const getHeaderVariant = () => {
    if (scrollDirection === 'top') return 'hero'
    if (scrollDirection === 'down') return 'hidden'
    return 'visible'
  }

  const headerVariants = {
    hero: {
      y: 0,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      backdropFilter: 'blur(0px)',
    },
    visible: {
      y: 0,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      backdropFilter: 'blur(12px)',
    },
    hidden: {
      y: -100,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      backdropFilter: 'blur(12px)',
    }
  }

  const textColorClass = shouldBeTransparent ? 'text-text-inverse' : 'text-text-primary'
  const borderClass = shouldBeTransparent ? 'border-transparent' : 'border-interactive-border'

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 border-b ${borderClass}`}
      initial="hero"
      animate={getHeaderVariant()}
      variants={headerVariants}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-between items-center" style={{ paddingTop: '18.5px', paddingBottom: '18.5px' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm italic">T</span>
              </div>
              <span className={`font-serif text-xl font-semibold ${textColorClass}`}>
                <span className="font-bold italic">T</span>erranova
              </span>
            </div>
          </Link>

          {/* Desktop/Tablet Navigation (810px+) */}
          <div className="hidden min-[810px]:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base lg:text-lg font-medium ${textColorClass} hover:opacity-70 transition-all duration-300 ease-out`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button (below 810px) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`min-[810px]:hidden p-2 ${textColorClass} hover:opacity-70 transition-all duration-300 ease-out`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation (below 810px) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="min-[810px]:hidden border-t border-interactive-border bg-white"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-lg font-medium text-text-secondary hover:text-text-primary transition-all duration-300 ease-out py-2"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header