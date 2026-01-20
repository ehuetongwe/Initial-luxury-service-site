'use client'

import { create } from 'zustand'

interface BookingState {
  selectedService: string | null
  selectedDate: Date | null
  selectedTime: string | null
  customerInfo: {
    name: string
    email: string
    phone: string
  }
  setSelectedService: (service: string) => void
  setSelectedDate: (date: Date) => void
  setSelectedTime: (time: string) => void
  setCustomerInfo: (info: Partial<BookingState['customerInfo']>) => void
  resetBooking: () => void
}

export const useBookingStore = create<BookingState>((set) => ({
  selectedService: null,
  selectedDate: null,
  selectedTime: null,
  customerInfo: {
    name: '',
    email: '',
    phone: '',
  },
  setSelectedService: (service) => set({ selectedService: service }),
  setSelectedDate: (date) => set({ selectedDate: date }),
  setSelectedTime: (time) => set({ selectedTime: time }),
  setCustomerInfo: (info) =>
    set((state) => ({
      customerInfo: { ...state.customerInfo, ...info },
    })),
  resetBooking: () =>
    set({
      selectedService: null,
      selectedDate: null,
      selectedTime: null,
      customerInfo: { name: '', email: '', phone: '' },
    }),
}))