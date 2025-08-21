import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-elevated">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-overline text-text-muted mb-4 tracking-widest">
              About me
            </p>
            <h2 className="heading-lg text-text-primary mb-8 font-serif">
              About Olivia
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
              <p>
                Olivia Foster has always been driven by a deep interest in architecture and design, which led her to pursue a career in real estate.
              </p>
              <p>
                After earning a degree in Real Estate & Property Management from the University of California, Berkeley, she immediately immersed herself in the industry, gaining valuable experience with top agencies in the region.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/about" className="btn-primary">
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="https://framerusercontent.com/images/qyrHS8yHxWjbGejCnaNbfZZL9w.jpg"
                alt="Olivia Sinclair - Real Estate Professional"
                className="w-full h-[600px] object-cover rounded-2xl shadow-elevated"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;