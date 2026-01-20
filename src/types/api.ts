export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface ContactRequest {
  name: string
  email: string
  phone?: string
  message: string
  service?: string
}

export interface BookingRequest {
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

export interface BookingResponse {
  id: string
  status: 'pending' | 'confirmed' | 'cancelled'
  confirmationNumber: string
}