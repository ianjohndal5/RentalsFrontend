import axios from 'axios'
import type { Property, Testimonial, Blog } from '../types'

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getFeaturedProperties = async (): Promise<Property[]> => {
  const response = await api.get('/properties/featured')
  return response.data
}

export const getProperties = async (params?: {
  type?: string
  location?: string
  search?: string
}): Promise<Property[]> => {
  const response = await api.get('/properties', { params })
  return response.data.data || response.data
}

export const getTestimonials = async (): Promise<Testimonial[]> => {
  const response = await api.get('/testimonials')
  return response.data
}

export const getBlogs = async (): Promise<Blog[]> => {
  const response = await api.get('/blogs')
  return response.data
}

// Agent registration interface
export interface AgentRegistrationData {
  firstName: string
  lastName: string
  email: string
  password: string
  phone?: string
  dateOfBirth?: string
  agencyName?: string
  officeAddress?: string
  city?: string
  state?: string
  zipCode?: string
  prcLicenseNumber: string
  licenseType: 'broker' | 'salesperson'
  expirationDate: string
  yearsOfExperience?: string
  agreeToTerms: boolean
}

export interface AgentRegistrationResponse {
  success: boolean
  message: string
  data?: {
    id: number
    name: string
    email: string
    status: string
  }
  errors?: Record<string, string[]>
}

export const registerAgent = async (data: AgentRegistrationData, file?: File): Promise<AgentRegistrationResponse> => {
  const formData = new FormData()
  
  // Append all form fields
  formData.append('firstName', data.firstName)
  formData.append('lastName', data.lastName)
  formData.append('email', data.email)
  formData.append('password', data.password)
  if (data.phone) formData.append('phone', data.phone)
  if (data.dateOfBirth) formData.append('dateOfBirth', data.dateOfBirth)
  if (data.agencyName) formData.append('agencyName', data.agencyName)
  if (data.officeAddress) formData.append('officeAddress', data.officeAddress)
  if (data.city) formData.append('city', data.city)
  if (data.state) formData.append('state', data.state)
  if (data.zipCode) formData.append('zipCode', data.zipCode)
  formData.append('prcLicenseNumber', data.prcLicenseNumber)
  formData.append('licenseType', data.licenseType)
  formData.append('expirationDate', data.expirationDate)
  if (data.yearsOfExperience) formData.append('yearsOfExperience', data.yearsOfExperience)
  formData.append('agreeToTerms', data.agreeToTerms.toString())
  
  // Append file if provided
  if (file) {
    formData.append('licenseDocument', file)
  }

  try {
    const response = await api.post('/agents/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data
  } catch (error: any) {
    // Re-throw with more context
    console.error('API call error:', error)
    throw error
  }
}

export default api

