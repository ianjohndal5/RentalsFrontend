import apiClient from '../client'
import type { Property } from '../../types'
import type { PaginatedResponse } from '../types'

/**
 * Properties API endpoints
 */

export interface GetPropertiesParams {
  type?: string
  location?: string
  search?: string
  page?: number
  per_page?: number
}

export const propertiesApi = {
  /**
   * Get featured properties
   */
  getFeatured: async (): Promise<Property[]> => {
    const response = await apiClient.get<Property[]>('/properties/featured')
    return response.data
  },

  /**
   * Get all properties with optional filters
   */
  getAll: async (params?: GetPropertiesParams): Promise<Property[]> => {
    const response = await apiClient.get<Property[] | PaginatedResponse<Property>>('/properties', { params })
    
    // Handle both direct array response and paginated response
    if (Array.isArray(response.data)) {
      return response.data
    }
    
    return response.data.data || []
  },

  /**
   * Get property by ID
   */
  getById: async (id: number): Promise<Property> => {
    const response = await apiClient.get<Property>(`/properties/${id}`)
    return response.data
  },

  /**
   * Create a new property (requires authentication)
   */
  create: async (propertyData: FormData): Promise<Property> => {
    const response = await apiClient.post<Property>('/properties', propertyData)
    return response.data
  },

  /**
   * Create multiple properties at once (bulk create - requires authentication)
   */
  bulkCreate: async (properties: Partial<Property>[]): Promise<{ data: Property[], created_count: number }> => {
    const response = await apiClient.post<{ data: Property[], created_count: number }>('/properties/bulk', {
      properties,
    })
    return response.data
  },
}

