import type { PropertyStatus } from '../enums/PropertyStatus'
import type { PropertyState } from '../enums/PropertyState'
import type { PropertyCategory } from '../enums/PropertyCategory'
import type { PropertyType } from '../enums/PropertyType'
import type { Location } from './Location'

export interface Property {
  id: string
  status: PropertyStatus
  state: PropertyState
  category: PropertyCategory
  type: PropertyType
  surface: number
  price: number
  location: Location
}

export interface PropertyCreate {
  state: PropertyState | null
  category: PropertyCategory | null
  type: PropertyType | null
  surface: number | null
  price: number | null
  location: Location | null
}