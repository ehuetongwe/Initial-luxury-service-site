export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Elite Rides</h3>
            <p className="text-sm text-gray-400">
              Bespoke luxury transportation for executives, creators, and discerning travelers who expect
              precision, privacy, and comfort in every journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-yellow-400 transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="/services" className="hover:text-yellow-400 transition-colors duration-200">Services</a>
              </li>
              <li>
                <a href="/fleet" className="hover:text-yellow-400 transition-colors duration-200">Fleet</a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-400 transition-colors duration-200">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-400 transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="block text-gray-400">Email</span>
                <a
                  href="mailto:concierge@eliterides.com"
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  concierge@eliterides.com
                </a>
              </li>
              <li>
                <span className="block text-gray-400">Phone</span>
                <a
                  href="tel:+1234567890"
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <span className="block text-gray-400">Service Area</span>
                <p>Major metropolitan areas, airports, and event venues across the region.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-6 text-xs text-gray-500 gap-4">
          <p>© {currentYear} Elite Rides. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}