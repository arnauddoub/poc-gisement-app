import type { PropertyStatus } from '../enums/PropertyStatus'
import type { PropertyState } from '../enums/PropertyState'
import type { PropertyCategory } from '../enums/PropertyCategory'
import type { PropertyType } from '../enums/PropertyType'

export interface Property {
  id: string
  status: PropertyStatus
  state: PropertyState
  category: PropertyCategory
  type: PropertyType
  surface: number
  price: number
  location: {
    address: string
    city: string
    zipCode: string
  }
}
