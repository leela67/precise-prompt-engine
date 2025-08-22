import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="mx-auto max-w-7xl section-padding">
        {/* Newsletter Section */}
        <div className="py-8 lg:py-16 border-b border-neutral-700">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="heading-section text-white content-spacing">
                Stay Updated on the Market
              </h3>
              <p className="text-body text-neutral-300">
                Get exclusive real estate insights, market trends, and property updates straight to your inbox.
              </p>
            </div>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-neutral-400"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-8 lg:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Contact Information */}
            <div>
              <h4 className="text-body-lg font-semibold content-spacing text-white">Contact Information</h4>
              <div className="space-y-2 text-caption text-neutral-300">
                <p>(310) 555-7890</p>
                <p>hello@julianrealestate.com</p>
                <p>1234 Main Street, Suite 500<br />Los Angeles, CA</p>
              </div>
            </div>

            {/* Pages */}
            <div>
              <h4 className="text-body-lg font-semibold content-spacing text-white">Pages</h4>
              <div className="space-y-2">
                <Link to="/" className="block text-caption text-neutral-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link to="/about" className="block text-caption text-neutral-300 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link to="/contact" className="block text-caption text-neutral-300 hover:text-white transition-colors">
                  Let's Connect
                </Link>
              </div>
            </div>

            {/* CMS */}
            <div>
              <h4 className="text-body-lg font-semibold content-spacing text-white">CMS</h4>
              <div className="space-y-2">
                <Link to="/featured-properties" className="block text-caption text-neutral-300 hover:text-white transition-colors">
                  Featured Properties
                </Link>
                <Link to="/past-transactions" className="block text-caption text-neutral-300 hover:text-white transition-colors">
                  Past Transactions
                </Link>
                <Link to="/blog" className="block text-caption text-neutral-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </div>
            </div>

            {/* Utility */}
            <div>
              <h4 className="text-body-lg font-semibold content-spacing text-white">Utility</h4>
              <div className="space-y-2">
                <Link to="/404" className="block text-caption text-neutral-300 hover:text-white transition-colors">
                  404
                </Link>
                <Link to="/privacy" className="block text-caption text-neutral-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-4 lg:py-6 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-neutral-900 font-bold text-sm italic">T</span>
                </div>
                <span className="font-serif text-xl font-semibold text-white">
                  <span className="font-bold italic">T</span>erranova
                </span>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-caption text-neutral-400">
                Designed by Dario Volkmann
              </p>
              <p className="text-caption text-neutral-400">
                © 2025 Terranova. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;