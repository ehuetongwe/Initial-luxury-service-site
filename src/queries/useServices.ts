'use client'

import { useState, useEffect } from 'react'

interface Service {
  id: string
  title: string
  description: string
  price: number
  duration: number
  image?: string
}

export function useServices() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true)
        // Placeholder for actual API call
        const response = await fetch('/api/services')
        if (!response.ok) {
          throw new Error('Failed to fetch services')
        }
        const data = await response.json()
        setServices(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
        // Fallback to empty array
        setServices([])
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  return { services, loading, error }
}