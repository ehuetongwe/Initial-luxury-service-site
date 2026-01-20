'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Banner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gradient-to-r from-transparent via-yellow-500 to-transparent border-opacity-30">
      {/* Gold gradient border at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60" />

      <div className="flex items-center justify-center h-10 px-4">
        <Link href="/" className="group">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-all duration-300"
          >
            {/* Arrow icon */}
            <motion.svg
              className="w-4 h-4 group-hover:transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              whileHover={{ x: -2 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </motion.svg>

            {/* Text */}
            <span className="text-sm font-medium tracking-wide group-hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.6)] transition-all duration-300">
              Return to Home
            </span>
          </motion.div>
        </Link>
      </div>
    </div>
  )
}