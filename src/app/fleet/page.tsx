'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import fleetData from '@/data/fleet.json'

interface Vehicle {
  id: string
  name: string
  description: string
  image: string
  features: string[]
  capacity: string
  type: string
}

export default function Fleet() {
  const vehicles: Vehicle[] = fleetData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative pt-34 pb-16 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-900" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Our Luxury{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Fleet
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Discover our meticulously curated collection of premium vehicles,
            each offering unparalleled comfort, style, and sophistication.
          </motion.p>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
      </section>

      {/* Fleet Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {vehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                variants={cardVariants}
                className="group relative bg-black border-2 border-gray-800 hover:border-yellow-500 rounded-xl overflow-hidden transition-all duration-500"
              >
                {/* Vehicle Image */}
                <div className="relative h-64 overflow-hidden rounded-t-xl">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={index < 2}
                    onError={(e) => (e.currentTarget.src = "/fleet/placeholder.jpg")}
                  />

                  {/* Image Overlay - reveals on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <h4 className="text-yellow-400 font-semibold mb-2 uppercase tracking-wide text-sm">
                        {vehicle.category}
                      </h4>
                      <p className="text-lg font-medium mb-1">{vehicle.passengers} Passengers</p>
                      <p className="text-sm opacity-90">Available Now</p>
                    </div>
                  </div>

                  {/* Gold corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Vehicle Info Card */}
                <div className="p-6">
                  {/* Vehicle Name */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {vehicle.name}
                  </h3>

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                      {vehicle.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm lg:text-base">
                    {vehicle.description}
                  </p>

                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-yellow-400 font-semibold mb-3 text-sm uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {vehicle.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Vehicle Specs */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800 group-hover:border-yellow-500/30 transition-colors duration-300">
                    <span className="text-yellow-400 font-bold text-base">
                      {vehicle.passengers} Passengers
                    </span>
                    <span className="text-gray-400 text-sm">
                      {vehicle.category}
                    </span>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-yellow-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Choose Your{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Perfect Ride
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 leading-relaxed"
          >
            Each vehicle in our fleet is maintained to the highest standards and ready for your next journey.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a
              href="/contact"
              className="group relative inline-block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold text-lg px-12 py-4 rounded-full uppercase tracking-wider transition-all duration-300 shadow-2xl"
              >
                <span className="relative z-10">Reserve Your Vehicle</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10 scale-150" />
              </motion.div>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}