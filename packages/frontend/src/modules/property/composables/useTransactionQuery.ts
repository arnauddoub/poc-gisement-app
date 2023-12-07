import type { Transaction, TransactionCreate } from 'shared/types/Transaction'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { useApi } from '@/composables/useApi'

export default function useTransactionQuery() {
  const queryClient = useQueryClient()

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

  function addTransaction(id: number) {
    return useMutation({
      mutationFn: async (transaction: TransactionCreate) => {
        const { data } = await useApi(`/properties/${id}/transactions`).post(transaction).json()
        if (data.value) return data.value
        throw new Error()
      },
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ['transactions'] })
    })
  }

  return {
    getTransactions,
    addTransaction
  }
}
