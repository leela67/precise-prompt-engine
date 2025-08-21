import heroImage from '@/assets/hero-living-room.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Luxury modern living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Overline */}
        <p className="text-overline text-text-inverse mb-6 tracking-widest animate-fade-in">
          YOUR NEXT MOVE STARTS HERE
        </p>
        
        {/* Main Heading */}
        <h1 className="heading-display text-text-inverse mb-6 animate-fade-in">
          Olivia Sinclair
        </h1>
        
        {/* Subtitle */}
        <p className="text-body-lg text-text-inverse mb-12 animate-fade-in">
          California Real Estate
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <a 
            href="#properties" 
            className="btn-primary"
          >
            View Properties
          </a>
          <a 
            href="#contact" 
            className="btn-secondary text-text-inverse border-text-inverse hover:bg-text-inverse hover:text-text-primary"
          >
            Let's Connect
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-inverse rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-inverse rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;