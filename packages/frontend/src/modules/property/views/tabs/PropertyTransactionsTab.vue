<script setup lang="ts">
import { computed } from 'vue'
import { useRouteParams } from '@vueuse/router'
import { readableNumber } from 'shared/utils/formats'
import BaseHeading from '@/components/base/BaseHeading.vue'
import useTransactionQuery from '@/modules/property/composables/useTransactionQuery'

const id = useRouteParams<number>('id')
const { getTransactions } = useTransactionQuery()
const { data: transactions, isLoading } = getTransactions(id.value)

const total = computed(() => {
  if (!transactions.value) return 0
  return parseFloat(transactions.value.reduce((acc, transaction) => acc + transaction.amount, 0).toFixed(2))
})
</script>

<template>
  <div class="card overflow-hidden">
    <div class="flex items-center justify-between">
      <BaseHeading type="h3">Dépenses / Recettes</BaseHeading>
      <Button label="Ajouter" outlined />
    </div>

    <DataTable :value="transactions" :loading="isLoading" style="min-height: 200px">
      <Column field="transactionType.name" header="Article" />
      <Column field="comment" header="Commentaire" />
      <Column field="quantity" header="Montant" body-style="text-align: right" :pt="{ headerContent: 'justify-end' }">
        <template #body="{ data }">
          <span :class="data.amount >= 0 ? 'text-green-500' : 'text-red-500'">{{ data.amount }} € / an</span>
        </template>
      </Column>
      <ColumnGroup type="footer">
        <Row>
          <Column
            footer-style="text-align: right"
            :footer="`${readableNumber(total)} € / an`"
            :footer-class="[total >= 0 ? '!text-green-500' : '!text-red-500']"
            :colspan="3"
          />
        </Row>
      </ColumnGroup>
    </DataTable>
  </div>
</template>
