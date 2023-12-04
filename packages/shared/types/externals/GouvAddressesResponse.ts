export interface GouvAddressesResponse {
  type: string
  version: string
  features: GouvAdress[]
  attribution: string
  licence: string
  query: string
  limit: number
}

export interface GouvAdress {
  geometry: { coordinates: [number, number] }
  properties: {
    city: string
    citycode: string
    context: string
    housenumber: string
    id: string
    importance: number
    label: string
    name: string
    postcode: string
    score: number
    street: string
    type: string
    x: number
    y: number
  }
}

export interface GouvAddressFormatted {
  label: string
  address: string
  city: string
  zipCode: string
  longitude: number
  latitude: number
}