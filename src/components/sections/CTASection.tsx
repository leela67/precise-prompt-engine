const CTASection = () => {
  return (
    <section id="contact" className="py-24 section-elevated">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <p className="text-overline text-text-muted mb-4">
              Find Your Dream Home Today
            </p>
            <h2 className="heading-lg text-text-primary mb-8">
              Buy, Sell & Rent Easily
            </h2>
            <p className="text-body-lg text-text-secondary mb-8">
              Ready to take the next step in your real estate journey? Whether you're buying, selling, or renting, our experienced team is here to guide you through every step of the process.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Let's Connect
              </a>
              <a href="#properties" className="btn-secondary">
                View Properties
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=500&fit=crop&crop=center"
                alt="Beautiful house interior"
                className="w-full h-[500px] object-cover rounded-2xl shadow-elevated"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;