<script setup lang="ts">
import type { Property } from '@/modules/property/types/Property'
import PropertyListItem from '@/modules/property/composables/PropertyListItem.vue'
import BaseHeading from '@/components/base/BaseHeading.vue'

const properties: Property[] = [
  {
    uuid: 'aaa',
    state: 'Résidence Principale',
    category: 'Appartement',
    type: '2 pièces',
    surface: 35,
    location: {
      address: '24 Rue de la République',
      city: 'Vanves',
      zipCode: '92170'
    }
  },
  {
    uuid: 'bbb',
    state: 'Investissement Locatif',
    category: 'Appartement',
    type: 'Studio',
    surface: 31,
    location: {
      address: '2 Sq. Arthur Rimbaud',
      city: 'Évry-Courcouronnes',
      zipCode: '91000'
    }
  }
]
</script>

<template>
  <div class="flex mb-10 items-center justify-between">
    <BaseHeading type="h1">Tous vos logements</BaseHeading>
    <Button outlined>Ajouter</Button>
  </div>
  <div class="grid gap-8">
    <PropertyListItem v-for="property in properties" :key="property.uuid" :property="property" />
  </div>
</template>
