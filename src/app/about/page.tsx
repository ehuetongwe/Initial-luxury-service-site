'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative pt-34 pb-16 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-900" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            The Story Behind{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Elite Rides
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Built for executives, creatives, and visionaries who refuse to compromise on time, privacy, or experience.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg mb-4">
              Elite Rides was founded on a simple belief: the way you arrive should reflect the way you lead.
              We exist to remove the friction, uncertainty, and stress from urban and long-distance travel
              for high-performing individuals and teams.
            </p>
            <p className="text-gray-400 mb-4">
              Every journey is meticulously planned — from route optimization and timing to in-car amenities
              and chauffeur presentation. We combine human service, advanced logistics, and premium vehicles
              to create an experience that feels effortless from first click to final drop-off.
            </p>
            <p className="text-gray-400">
              Whether it&apos;s a 5 AM airport transfer, investor roadshow, multi-day conference, or red-carpet event,
              our role is to anticipate what you need before you ask for it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="bg-black border-2 border-yellow-500/40 rounded-2xl p-8 space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">What Defines Our Service</h3>
            <ul className="space-y-4 text-gray-300 text-sm sm:text-base">
              <li>
                <span className="font-semibold text-yellow-400">Discretion First:</span> Our chauffeurs are trained to
                protect your privacy, maintain confidentiality, and operate with complete professionalism.
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Precision Timing:</span> Real-time traffic monitoring and
                proactive route planning ensure on-time arrivals — without stress or surprises.
              </li>
              <li>
                <span className="font-semibold text-yellow-400">White-Glove Standards:</span> From immaculate vehicles to
                door-to-door assistance, every interaction is designed to exceed expectations.
              </li>
              <li>
                <span className="font-semibold text-yellow-400">Human + Technology:</span> A dedicated concierge team
                supported by smart systems keeps every detail aligned with your preferences.
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Numbers & Credentials */}
      <section className="py-16 bg-black border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="border border-gray-800 rounded-xl p-6">
            <p className="text-3xl font-bold text-yellow-400 mb-1">10k+</p>
            <p className="text-xs uppercase tracking-wide text-gray-400">Trips Completed</p>
          </div>
          <div className="border border-gray-800 rounded-xl p-6">
            <p className="text-3xl font-bold text-yellow-400 mb-1">150+</p>
            <p className="text-xs uppercase tracking-wide text-gray-400">Corporate Clients</p>
          </div>
          <div className="border border-gray-800 rounded-xl p-6">
            <p className="text-3xl font-bold text-yellow-400 mb-1">24/7</p>
            <p className="text-xs uppercase tracking-wide text-gray-400">Concierge Support</p>
          </div>
          <div className="border border-gray-800 rounded-xl p-6">
            <p className="text-3xl font-bold text-yellow-400 mb-1">4.9★</p>
            <p className="text-xs uppercase tracking-wide text-gray-400">Average Rating</p>
          </div>
        </div>
      </section>

      {/* Experience Pillars */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">The Elite Rides Experience</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We distilled our service into three core pillars that guide every decision, from fleet selection to
              chauffeur training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Impeccable Fleet</h3>
              <p className="text-gray-400 text-sm">
                Rolls-Royce, Mercedes, Tesla, and Cadillac vehicles maintained to the highest standards — detailed,
                inspected, and prepared before every trip.
              </p>
            </div>
            <div className="bg-black border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Chauffeur Excellence</h3>
              <p className="text-gray-400 text-sm">
                Our chauffeurs combine hospitality, safety, and professionalism — trained to anticipate needs,
                respect your time, and support your schedule.
              </p>
            </div>
            <div className="bg-black border border-gray-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Concierge-Level Care</h3>
              <p className="text-gray-400 text-sm">
                From multi-stop itineraries to last-minute changes, our team coordinates every detail so you can
                focus on what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Ready to Experience the Difference?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 leading-relaxed"
          >
            Share your itinerary with our concierge team and we&apos;ll design a seamless transportation plan
            tailored to your schedule, preferences, and guests.
          </motion.p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-12 py-4 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold uppercase tracking-wide shadow-2xl hover:shadow-yellow-500/40 transition-all duration-300"
          >
            Speak with Our Concierge
          </motion.a>
        </div>
      </section>
    </div>
  )
}