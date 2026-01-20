'use client'

import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  features?: string[]
  price?: string
  duration?: string
}

export default function ServiceCard({
  title,
  description,
  features = [],
  price,
  duration
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -5
      }}
      className="group relative bg-black border-2 border-gray-800 hover:border-yellow-500 p-8 rounded-xl shadow-xl transition-all duration-500 overflow-hidden"
    >
      {/* Gold glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6 text-base">
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-yellow-400 font-semibold mb-3 text-sm uppercase tracking-wide">
              Features
            </h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-300 text-sm">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Pricing */}
        {(price || duration) && (
          <div className="flex items-center justify-between pt-4 border-t border-gray-800 group-hover:border-yellow-500/30 transition-colors duration-300">
            {price && (
              <span className="text-yellow-400 font-bold text-lg">
                {price}
              </span>
            )}
            {duration && (
              <span className="text-gray-400 text-sm">
                {duration}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}