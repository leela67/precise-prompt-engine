import { motion } from 'framer-motion';

const TestimonialSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://framerusercontent.com/images/qyrHS8yHxWjbGejCnaNbfZZL9w.jpg"
          alt="Testimonial background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Client Photo */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-20 h-20 mx-auto mb-6">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
              alt="Emily Carter - Client"
              className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white"
            />
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-2xl lg:text-3xl font-light leading-relaxed text-white mb-8 italic font-serif">
            "She took the time to understand exactly what we wanted and found us a home that exceeded our expectations. Her market knowledge and negotiation skills helped us secure the property at a great price, even in a competitive market."
          </p>
        </motion.blockquote>

        {/* Client Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <cite className="not-italic">
            <p className="font-semibold text-white text-lg">Emily Carter</p>
            <p className="text-white/80">Buyer</p>
          </cite>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;