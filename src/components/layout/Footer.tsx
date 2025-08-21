const Footer = () => {
  return (
    <footer className="border-t border-interactive-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="font-serif text-xl font-semibold text-text-primary">Ambience</span>
            </div>
          </div>

          {/* Attribution */}
          <div className="text-center md:text-right">
            <p className="text-text-muted text-sm">
              © 2025 Ambience Real Estate. All rights reserved.
            </p>
            <p className="text-text-muted text-xs mt-1">
              Built with precision and attention to detail
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;