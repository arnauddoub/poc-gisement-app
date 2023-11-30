<script setup lang="ts">
import { properties } from '@/modules/property/fakes/properties'
import PropertyListItem from '@/modules/property/composables/PropertyListItem.vue'
import BaseHeading from '@/components/base/BaseHeading.vue'
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
