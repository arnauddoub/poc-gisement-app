<script setup lang="ts">
import type { TransactionCreate } from 'shared/types/Transaction'
import { ref, watch } from 'vue'
import { useRouteParams } from '@vueuse/router'
import { useApi } from '@/composables/useApi'
import useTransactionQuery from '../composables/useTransactionQuery'
import BaseFormItem from '@/components/base/BaseFormItem.vue'

const id = useRouteParams<number>('id')

const { addTransaction } = useTransactionQuery()

const { data: transactionTypes } = useApi('/transaction-types').json()

const transaction = ref<TransactionCreate>({
  propertyId: id.value,
  transactionTypeId: null,
  comment: null,
  amount: null
})

const { mutate, isPending, isSuccess } = addTransaction(id.value)

function submit() {
  mutate(transaction.value)
}

watch(isSuccess, (value) => {
  if (!value) return
  transaction.value.transactionTypeId = null
  transaction.value.comment = null
  transaction.value.amount = null
})
</script>

<template>
  <div class="flex flex-col gap-4 md:flex-row my-6 md:items-end">
    <BaseFormItem for-id="field-type-name" class="flex-1" label="Type :">
      <Dropdown
        v-model="transaction.transactionTypeId"
        input-id="field-type-name"
        option-label="name"
        option-value="id"
        filter
        :options="transactionTypes"
        :style="{ width: '100%' }"
      />
    </BaseFormItem>

    <BaseFormItem for-id="field-comment" class="flex-1" label="Commentaire :">
      <InputText id="field-comment" v-model="transaction.comment" :style="{ width: '100%' }" />
    </BaseFormItem>

    <BaseFormItem for-id="field-amount" class="flex-1" label="Montant :">
      <InputNumber
        v-model="transaction.amount"
        input-id="field-amount"
        :input-style="{ width: '100%' }"
        mode="currency"
        currency="EUR"
        locale="fr-FR"
        :min-fraction-digits="2"
      />
    </BaseFormItem>

    <Button label="Ajouter" outlined :loading="isPending" @click="submit" />
  </div>
</template>
