export interface GouvAddressesResponse {
  type: string
  version: string
  features: GouvAddress[]
  attribution: string
  licence: string
  query: string
  limit: number
}

export interface GouvAddress {
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