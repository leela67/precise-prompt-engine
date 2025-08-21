const TestimonialSection = () => {
  return (
    <section className="py-24 section-neutral">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Client Photo */}
        <div className="mb-8 animate-fade-in">
          <div className="w-20 h-20 mx-auto mb-6">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
              alt="Emily Carter - Client"
              className="w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
        </div>

        {/* Testimonial */}
        <blockquote className="animate-fade-in">
          <p className="text-2xl lg:text-3xl font-light leading-relaxed text-text-primary mb-8 italic">
            "She took the time to understand exactly what we wanted and found us a home that exceeded our expectations. Her market knowledge and negotiation skills helped us secure the property at a great price, even in a competitive market."
          </p>
        </blockquote>

        {/* Client Info */}
        <div className="animate-fade-in">
          <div className="w-12 h-12 mx-auto mb-4">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=center"
              alt="Rating"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <cite className="not-italic">
            <p className="font-medium text-text-primary">Emily Carter</p>
            <p className="text-text-secondary">Buyer</p>
          </cite>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;