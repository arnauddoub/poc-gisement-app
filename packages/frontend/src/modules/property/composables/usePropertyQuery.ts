import type { Property } from 'shared/types/Property'
import { useQuery } from '@tanstack/vue-query'

export default function usePropertyQuery() {
  function getProperties() {
    return useQuery({
      queryKey: ['properties'],
      queryFn: (): Promise<Property[]> => fetch('/api/properties').then((res) => res.json())
    })
  }

  function getProperty(id: number) {
    return useQuery({
      queryKey: ['property', id],
      queryFn: (): Promise<Property> => fetch(`/api/properties/${id}`).then((res) => res.json())
    })
  }

  return {
    getProperties,
    getProperty
  }
}
