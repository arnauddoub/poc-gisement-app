import type { Property, PropertyCreate } from 'shared/types/Property'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { useApi } from '@/composables/useApi'

export default function usePropertyQuery() {
  const queryClient = useQueryClient()

  function getProperties() {
    return useQuery({
      queryKey: ['properties'],
      queryFn: async () => {
        const { data } = await useApi('/properties').get().json<Property[]>()
        if (data.value) return data.value
        throw new Error()
      }
    })
  }

  function getProperty(id: number) {
    return useQuery({
      queryKey: ['property', id],
      queryFn: async () => {
        const { data } = await useApi(`/properties/${id}`).get().json<Property>()
        if (data.value) return data.value
        throw new Error()
      }
    })
  }

  function addProperty() {
    return useMutation({
      mutationFn: async (property: PropertyCreate) => {
        const { data } = await useApi('/properties').post(property).json()
        if (data.value) return data.value
        throw new Error()
      },
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ['properties'] })
    })
  }

  return {
    getProperties,
    getProperty,
    addProperty
  }
}
