<script setup lang="ts">
import usePropertyQuery from '@/modules/property/composables/usePropertyQuery'
import PropertyListItem from '@/modules/property/composables/PropertyListItem.vue'
import BaseHeading from '@/components/base/BaseHeading.vue'

const { getProperties } = usePropertyQuery()
const { data: properties } = getProperties()
</script>

<template>
  <div class="flex mb-10 items-center justify-between">
    <BaseHeading type="h1">Tous vos logements</BaseHeading>
    <Button outlined>Ajouter</Button>
  </div>
  <div class="grid gap-8">
    <PropertyListItem v-for="property in properties" :key="property.id" :property="property" />
  </div>
</template>
