import type { Property } from '../types/Property'

export const properties: Property[] = [
  {
    uuid: 'aaa',
    state: 'Résidence Principale',
    category: 'Appartement',
    type: '2 pièces',
    surface: 35,
    price: 200_000,
    location: {
      address: '24 Rue de la République',
      city: 'Vanves',
      zipCode: '92170'
    }
  },
  {
    uuid: 'bbb',
    state: 'Investissement Locatif',
    category: 'Appartement',
    type: 'Studio',
    surface: 31,
    price: 200_000,
    location: {
      address: '2 Sq. Arthur Rimbaud',
      city: 'Évry-Courcouronnes',
      zipCode: '91000'
    }
  }
]
