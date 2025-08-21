import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-overline text-text-muted mb-4">
            FAQ's
          </p>
          <h2 className="heading-lg text-text-primary">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-interactive-border rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-surface transition-colors"
              >
                <h3 className="font-medium text-text-primary pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-text-secondary" />
                  ) : (
                    <Plus className="h-5 w-5 text-text-secondary" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-body text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;