export interface Property {
  uuid: string
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

export type PropertyState = 'Résidence Principale' | 'Résidence Secondaire' | 'Investissement Locatif'

export type PropertyCategory = 'Appartement' | 'Maison' | 'Terrain' | 'Parking' | 'Local Commercial' | 'Immeuble'

export type PropertyType = 'Studio' | '2 pièces' | '3 pièces' | '4 pièces'
