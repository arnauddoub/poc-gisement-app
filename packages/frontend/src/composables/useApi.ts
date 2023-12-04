import { createFetch } from '@vueuse/core'

export const useApi = createFetch({
  baseUrl: '/api',
  fetchOptions: {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
})
