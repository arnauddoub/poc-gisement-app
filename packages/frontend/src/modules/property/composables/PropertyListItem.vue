<script setup lang="ts">
import type { Property } from '@/modules/property/types/Property'
import { RouterLink } from 'vue-router'
import BaseValue from '@/components/base/BaseValue.vue'

defineProps<{
  property: Property
}>()
</script>

<template>
  <div class="card md:h-32">
    <div class="h-full relative items-center md:flex md:space-x-6 md:pl-20">
      <div class="max-md:mx-auto max-md:mb-4 -bottom-1 left-0 w-20 md:absolute">
        <img src="@/assets/properties/building.png" class="opacity-70" alt="building" />
      </div>
      <div class="flex max-md:flex-col flex-1 max-md:space-y-4 justify-between md:items-center">
        <div>
          <span class="text-sm mb-1 text-gray-400 block">{{ property.category }}</span>
          <h3 class="font-medium max-w-sm text-lg leading-snug">
            {{ property.location.address }}
            <span class="block">{{ property.location.zipCode }} {{ property.location.city }}</span>
          </h3>
        </div>
        <div class="flex space-x-6">
          <BaseValue label="Statut :" :value="property.state" />
          <BaseValue label="Type :" :value="property.type" />
        </div>
        <div class="md:w-40">
          <RouterLink :to="{ name: 'properties.show', params: { id: property.id } }">
            <Button class="w-full justify-center">Détail</Button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
