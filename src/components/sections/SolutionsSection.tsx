import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

const solutions = [
  {
    id: 'our-properties',
    title: 'Our Properties',
    description: 'Discover handpicked luxury properties',
    image: 'https://framerusercontent.com/images/k6XkilwTVOSakz8ryCuWrU7YQFg.jpg',
    href: '/featured-properties'
  },
  {
    id: 'past-transactions',
    title: 'Past Transactions',
    description: 'View our successful property sales',
    image: 'https://framerusercontent.com/images/V7bxnKBJLKWLeFJJsbtEAYNbc8.jpg',
    href: '/past-transactions'
  },
  {
    id: 'lets-connect',
    title: "Let's Connect",
    description: 'Start your real estate journey',
    image: 'https://framerusercontent.com/images/qyrHS8yHxWjbGejCnaNbfZZL9w.jpg',
    href: '/contact'
  }
]

const SolutionsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
    }
  }

  return (
    <section className="py-24 section-neutral">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-overline text-text-muted mb-4">
            How Can We Help?
          </p>
          <h2 className="heading-lg text-text-primary">
            Explore Our Solutions
          </h2>
        </motion.div>

        {/* Solutions Accordion */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 md:gap-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {solutions.map((solution, index) => {
            const isHovered = hoveredCard === solution.id
            const isAnyHovered = hoveredCard !== null
            const shouldShrink = isAnyHovered && !isHovered

            return (
              <motion.div
                key={solution.id}
                variants={cardVariants}
                className="group relative"
                transition={{ duration: 0.8 }}
                onMouseEnter={() => setHoveredCard(solution.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  flex: isHovered ? '2' : shouldShrink ? '0.8' : '1',
                  transition: 'flex 0.4s ease-in-out'
                }}
              >
                <Link to={solution.href} className="block h-full">
                  <motion.div
                    className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 h-full"
                    layout
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="flex items-end justify-between">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl md:text-2xl font-light text-white mb-2 font-serif">
                            {solution.title}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {solution.description}
                          </p>
                        </div>

                        <div className="ml-4 flex-shrink-0">
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                            <ArrowUpRight className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionsSection;