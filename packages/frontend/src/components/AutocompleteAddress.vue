<script setup lang="ts">
import type { AutoCompleteCompleteEvent } from 'primevue/autocomplete'
import type { GouvAdress, GouvAddressFormatted } from 'shared/types/externals/GouvAddressesResponse'
import type { Location } from 'shared/types/Location'
import { ref } from 'vue'
import { useApi } from '@/composables/useApi'

defineProps<{ modelValue: Location | null }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: GouvAddressFormatted): void }>()

const address = ref(null)
const addresses = ref<GouvAddressFormatted[]>([])

async function search({ query }: AutoCompleteCompleteEvent) {
  const param = decodeURIComponent(new URLSearchParams({ query }).toString())
  const { data } = await useApi(`/locations/autocomplete?${param}`).json<GouvAdress[]>()

  if (!data.value) return

  addresses.value = data.value?.map((item) => ({
    label: item.properties.label,
    city: item.properties.city,
    address: item.properties.name,
    zipCode: item.properties.postcode,
    longitude: item.geometry.coordinates[0],
    latitude: item.geometry.coordinates[1]
  }))
}
</script>

<template>
  <AutoComplete
    v-model="address"
    input-id="field-address"
    option-label="label"
    :suggestions="addresses"
    :input-style="{ width: '100%' }"
    :style="{ width: '100%' }"
    @complete="search"
    @item-select="({ value }) => emit('update:modelValue', value)"
  />
</template>
