'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import CalendarEmbed from '@/components/CalendarEmbed'

interface FormData {
  name: string
  email: string
  pickupLocation: string
  destination: string
  date: string
  time: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    pickupLocation: '',
    destination: '',
    date: '',
    time: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'booking'
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: `Booking request submitted successfully! Confirmation: ${result.data.confirmationNumber}`
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          pickupLocation: '',
          destination: '',
          date: '',
          time: '',
          message: ''
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message || 'Failed to submit booking request'
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

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

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0,
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
            Book Your{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Elite Ride
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Experience luxury transportation at its finest. Schedule your ride or get in touch with our concierge team.
          </motion.p>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-50" />
      </section>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >

        {/* Section 1: Booking Form */}
        <motion.section
          variants={sectionVariants}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Quick{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Booking
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Fill out the form below and we'll get back to you within minutes
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-black border-2 border-yellow-500 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-yellow-400 font-semibold mb-2 uppercase tracking-wide text-sm">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-900 border-2 border-gray-700 focus:border-yellow-500 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-yellow-400 font-semibold mb-2 uppercase tracking-wide text-sm">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-900 border-2 border-gray-700 focus:border-yellow-500 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Pickup Location */}
                <div>
                  <label htmlFor="pickupLocation" className="block text-yellow-400 font-semibold mb-2 uppercase tracking-wide text-sm">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 border-2 border-gray-700 focus:border-yellow-500 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                    placeholder="Airport, hotel, office address..."
                  />
                </div>

                {/* Destination */}
                <div>
                  <label htmlFor="destination" className="block text-yellow-400 font-semibold mb-2 uppercase tracking-wide text-sm">
                    Destination
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 border-2 border-gray-700 focus:border-yellow-500 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                    placeholder="Where would you like to go?"
                  />
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="date" className="block text-yellow-400 font-semibold mb-2 uppercase tracking-wide text-sm">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 border-2 border-gray-700 focus:border-yellow-500 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                  />
                </div>

                {/* Time */}
                <div>
                  <label htmlFor="time" className="block text-yellow-400 font-semibold mb-2 uppercase tracking-wide text-sm">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full bg-gray-900 border-2 border-gray-700 focus:border-yellow-500 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label htmlFor="message" className="block text-yellow-400 font-semibold mb-2 uppercase tracking-wide text-sm">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-gray-900 border-2 border-gray-700 focus:border-yellow-500 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 resize-none"
                  placeholder="Any special requirements, preferred vehicle, or additional information..."
                />
              </div>

              {/* Submit Status */}
              {submitStatus.type && (
                <div className={`mb-6 p-4 rounded-lg border-2 ${
                  submitStatus.type === 'success'
                    ? 'border-green-500 bg-green-500/10 text-green-400'
                    : 'border-red-500 bg-red-500/10 text-red-400'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative overflow-hidden bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-bold text-lg px-12 py-4 rounded-full uppercase tracking-wider transition-all duration-300 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <span className="relative z-10">
                    {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 -z-10 scale-150" />
                </motion.button>
              </div>
            </form>
          </div>
        </motion.section>

        {/* Section 2: Calendar Embed */}
        <motion.section
          variants={sectionVariants}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Schedule{' '}
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  Online
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Book directly through our calendar for instant confirmation
              </p>
            </div>

            <CalendarEmbed height={600} />
          </div>
        </motion.section>

      </motion.div>
    </div>
  )
}