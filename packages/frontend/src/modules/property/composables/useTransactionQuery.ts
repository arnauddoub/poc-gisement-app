import type { Transaction } from 'shared/types/Transaction'
import { useQuery } from '@tanstack/vue-query'
import { useApi } from '@/composables/useApi'

export default function useTransactionQuery() {
  function getTransactions(id: number) {
    return useQuery({
      queryKey: ['transactions', id],
      queryFn: async () => {
        const { data } = await useApi(`/properties/${id}/transactions`).get().json<Transaction[]>()
        if (data.value) return data.value
        throw new Error()
      }
    })
  }

  return {
    getTransactions
  }
}
