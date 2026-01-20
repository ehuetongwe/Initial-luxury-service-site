import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCarousel from '@/components/Testimonial'
import servicesData from '@/data/services.json'

interface Service {
  id: string
  title: string
  description: string
  features: string[]
  price: string
  duration: string
}

const services: Service[] = servicesData

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Signature <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              Curated transportation solutions designed for executives, events, and discerning travelers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                features={service.features}
                price={service.price}
                duration={service.duration}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              The Standard in <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Luxury Transport</span>
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Elite Rides was created for leaders, innovators, and tastemakers who expect more from every journey.
            </p>
            <p className="text-gray-400 mb-6">
              From airport transfers to red-carpet events, our white-glove chauffeurs, meticulously maintained vehicles,
              and concierge-level service ensure every detail is handled with precision.
            </p>
            <a
              href="/about"
              className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors duration-300"
            >
              Learn more about our story
              <span className="ml-2 text-lg">→</span>
            </a>
          </div>

          <div className="bg-black border-2 border-yellow-500/40 rounded-2xl p-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Why clients choose Elite Rides</h3>
              <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
                <li>• Professional, vetted chauffeurs with executive training</li>
                <li>• Real-time trip monitoring and proactive route optimization</li>
                <li>• Discreet, private, and secure in-car environment</li>
                <li>• 24/7 concierge support for last-minute changes</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="border border-gray-700 rounded-xl p-4">
                <p className="text-3xl font-bold text-yellow-400 mb-1">12+</p>
                <p className="text-xs uppercase tracking-wide text-gray-400">Years Experience</p>
              </div>
              <div className="border border-gray-700 rounded-xl p-4">
                <p className="text-3xl font-bold text-yellow-400 mb-1">4.9★</p>
                <p className="text-xs uppercase tracking-wide text-gray-400">Client Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything you need to know about booking, cancellations, and our service standards.
            </p>
          </div>

          <div className="space-y-4">
            <details className="group border border-gray-800 rounded-xl bg-gray-900/60">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                <span className="text-white font-semibold">How far in advance should I book my ride?</span>
                <span className="text-yellow-400 group-open:rotate-45 transition-transform duration-200 text-2xl">+</span>
              </summary>
              <div className="px-6 pb-4 pt-1 text-gray-300 text-sm sm:text-base">
                For airport transfers and standard bookings, we recommend booking at least 24 hours in advance.
                For large events or multi-vehicle reservations, 3–7 days ensures optimal availability.
              </div>
            </details>

            <details className="group border border-gray-800 rounded-xl bg-gray-900/60">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                <span className="text-white font-semibold">Can I make changes to my booking?</span>
                <span className="text-yellow-400 group-open:rotate-45 transition-transform duration-200 text-2xl">+</span>
              </summary>
              <div className="px-6 pb-4 pt-1 text-gray-300 text-sm sm:text-base">
                Yes. Our concierge team is available 24/7 to assist with updates to your pickup time, location, or vehicle selection.
                Changes are subject to availability, but we do everything possible to accommodate your schedule.
              </div>
            </details>

            <details className="group border border-gray-800 rounded-xl bg-gray-900/60">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                <span className="text-white font-semibold">What safety and privacy measures do you have in place?</span>
                <span className="text-yellow-400 group-open:rotate-45 transition-transform duration-200 text-2xl">+</span>
              </summary>
              <div className="px-6 pb-4 pt-1 text-gray-300 text-sm sm:text-base">
                All chauffeurs undergo background checks, training, and regular evaluations.
                Vehicles are GPS-tracked, sanitized before every trip, and our team follows strict confidentiality protocols for every guest.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel autoRotate={true} interval={5000} />

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 border-top border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Stay Ahead of Every Journey</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our private list for priority access to peak-date availability, new fleet additions, and curated travel insights.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              required
              placeholder="Enter your business email"
              className="w-full sm:w-2/3 px-4 py-3 rounded-full bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/60"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold uppercase tracking-wide hover:shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
            >
              Join List
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-500">
            We respect your privacy. No spam — only high-value updates a few times per month.
          </p>
        </div>
      </section>
    </div>
  )
}