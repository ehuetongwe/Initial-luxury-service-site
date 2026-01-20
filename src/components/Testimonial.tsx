'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import testimonialsData from '@/data/testimonials.json'

interface TestimonialData {
  id: string
  name: string
  role: string
  company: string
  review: string
  rating: number
  service: string
}

interface TestimonialCarouselProps {
  autoRotate?: boolean
  interval?: number
}

export default function TestimonialCarousel({
  autoRotate = true,
  interval = 5000
}: TestimonialCarouselProps) {
  const testimonials: TestimonialData[] = testimonialsData
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate) return

    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, interval)

    return () => clearInterval(timer)
  }, [autoRotate, interval, testimonials.length])

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  if (testimonials.length === 0) {
    return null
  }

  return (
    <div className="relative bg-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Client{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Hear from executives and professionals who trust Elite Rides for their transportation needs.
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative">

          {/* Main Testimonial Card */}
          <div className="relative h-80 sm:h-96 lg:h-80 overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    goToNext()
                  } else if (swipe > swipeConfidenceThreshold) {
                    goToPrevious()
                  }
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-black border-2 border-yellow-500 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto shadow-2xl">
                  <div className="text-center">

                    {/* Quote Icon */}
                    <div className="mb-6">
                      <span className="text-yellow-500 text-6xl font-serif">&ldquo;</span>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-100 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8 italic">
                      {testimonials[currentIndex].review}
                    </p>

                    {/* Rating Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-yellow-400 text-2xl mx-1"
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>

                    {/* Client Info */}
                    <div className="border-t border-gray-700 pt-6">
                      <h4 className="text-yellow-400 text-xl sm:text-2xl font-bold mb-2">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-300 text-lg mb-1">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-gray-400 text-base mb-3">
                        {testimonials[currentIndex].company}
                      </p>
                      <span className="inline-block bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                        {testimonials[currentIndex].service}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/80 hover:bg-yellow-500 border-2 border-yellow-500 hover:border-yellow-400 text-white hover:text-black p-3 rounded-full transition-all duration-300 z-10 group"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/80 hover:bg-yellow-500 border-2 border-yellow-500 hover:border-yellow-400 text-white hover:text-black p-3 rounded-full transition-all duration-300 z-10 group"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-yellow-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-6 max-w-md mx-auto">
          <div className="bg-gray-700 rounded-full h-1 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: interval / 1000, ease: "linear" }}
              key={currentIndex}
            />
          </div>
        </div>
      </div>
    </div>
  )
}