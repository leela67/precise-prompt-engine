const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-elevated">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <p className="text-overline text-text-muted mb-4">
              About me
            </p>
            <h2 className="heading-lg text-text-primary mb-8">
              About Olivia
            </h2>
            <div className="space-y-6 text-body text-text-secondary">
              <p>
                Olivia Foster has always been driven by a deep interest in architecture and design, which led her to pursue a career in real estate.
              </p>
              <p>
                After earning a degree in Real Estate & Property Management from the University of California, Berkeley, she immediately immersed herself in the industry, gaining valuable experience with top agencies in the region.
              </p>
            </div>
            <div className="mt-8">
              <a href="#contact" className="btn-primary">
                Learn More
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=700&fit=crop&crop=center"
                alt="Olivia Sinclair - Real Estate Professional"
                className="w-full h-[600px] object-cover rounded-2xl shadow-elevated"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;