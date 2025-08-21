import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How do I schedule a property tour?',
      answer: 'You can schedule a tour by filling out the contact form on our website or calling us directly. One of our agents will get in touch to confirm the date and time that works best for you.'
    },
    {
      question: 'How long does the home-buying process take?',
      answer: 'The timeline varies, but on average, it takes between 30 to 60 days from the time you make an offer to the closing date. Factors such as loan approval, home inspections, and negotiations can affect the timeline.'
    },
    {
      question: 'Do you handle rentals as well?',
      answer: 'Yes, we assist with both property rentals and purchases. Whether you\'re looking for a short-term lease, a long-term rental, or a rent-to-own option, our agents can help you find the perfect home.'
    },
    {
      question: 'How do I know if a property is a good investment?',
      answer: 'A good investment property typically has strong potential for appreciation, is located in a desirable area, and generates a steady rental income. It\'s important to consider factors like market trends, property condition, and long-term growth potential before making a decision.'
    }
  ];

  return (
    <section className="py-24 section-neutral">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Animation/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
              <motion.div
                className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-4xl">❓</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - FAQ Content */}
          <div>
            {/* Section Header */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-overline text-text-muted mb-4 tracking-widest">
                FAQ's
              </p>
              <h2 className="heading-lg text-text-primary font-serif">
                Frequently Asked Questions
              </h2>
            </motion.div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border-b border-neutral-200 last:border-b-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-6 text-left flex items-center justify-between hover:opacity-70 transition-opacity"
                  >
                    <h3 className="text-lg font-medium text-text-primary pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <motion.div
                        animate={{ rotate: openIndex === index ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Plus className="h-5 w-5 text-text-secondary" />
                      </motion.div>
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6">
                      <p className="text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;