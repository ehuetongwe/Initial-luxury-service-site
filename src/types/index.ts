export interface Service {
  id: string
  title: string
  description: string
  price: number
  duration: number
  category: string
  image?: string
  features?: string[]
}

export interface Testimonial {
  id: string
  name: string
  content: string
  rating: number
  service?: string
  date: string
  image?: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  message: string
  service?: string
}

export interface BookingForm {
  serviceId: string
  date: string
  time: string
  customerInfo: {
    name: string
    email: string
    phone: string
  }
  specialRequests?: string
}