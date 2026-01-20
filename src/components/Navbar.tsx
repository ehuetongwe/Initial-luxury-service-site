'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import navData from '@/data/nav.json'

interface NavItem {
  label: string
  href: string
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems: NavItem[] = navData

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-md shadow-lg'
          : 'bg-black/60 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8 lg:w-10 lg:h-10">
              <Image
                src="/logo.png"
                alt="Elite Rides Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-white font-bold text-xl lg:text-2xl tracking-tight">
              Elite Rides
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative text-white font-medium text-sm tracking-wide uppercase group"
              >
                <span className="relative z-10">{item.label}</span>

                {/* Gold underline animation */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-300 group-hover:w-full"></span>

                {/* Hover glow effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100 -z-10"></span>
              </Link>
            ))}

            {/* Book a Ride Button */}
            <Link
              href="/contact"
              className="relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold px-6 py-3 rounded-full uppercase text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/25 hover:scale-105"
            >
              <span className="relative z-10">Book a Ride</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative w-6 h-6 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="sr-only">Open main menu</span>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-white font-medium text-lg uppercase tracking-wide py-2 hover:text-yellow-400 transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Book a Ride Button */}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 px-6 rounded-full text-center uppercase tracking-wide mt-6 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300"
              >
                Book a Ride
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}