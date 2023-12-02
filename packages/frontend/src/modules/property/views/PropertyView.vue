<script setup lang="ts">
import { ref } from 'vue'
import { useRouteParams } from '@vueuse/router'
import usePropertyQuery from '../composables/usePropertyQuery'
import BaseValue from '@/components/base/BaseValue.vue'
import BaseHeading from '@/components/base/BaseHeading.vue'

const id = useRouteParams<number>('id')
const { getProperty } = usePropertyQuery()
const { data: property } = getProperty(id.value)

const items = ref([
  { label: 'Synthèse', icon: 'pi pi-home' },
  { label: 'Paramètres', icon: 'pi pi-home' }
])
</script>

<template>
  <div class="grid gap-6">
    <div class="flex justify-between items-center">
      <BaseHeading type="h1">{{ property?.location.address }} {{ property?.location.zipCode }} {{ property?.location.city }}</BaseHeading>
      <Tag severity="info" value="Analyse en cours" />
    </div>

    <div class="grid gap-2 grid-cols-1 card md:gap-6 md:grid-cols-5">
      <BaseValue label="Statut :" :value="property?.state" />
      <BaseValue label="Catégorie :" :value="property?.category" />
      <BaseValue label="Type :" :value="property?.type" />
      <BaseValue label="Surface :" :value="`${property?.surface} m2`" />
      <BaseValue label="Prix :" :value="`${property?.price} €`" />
    </div>

    <div class="card overflow-hidden" style="padding: 0">
      <TabMenu :model="items" />
    </div>
  </div>
</template>
