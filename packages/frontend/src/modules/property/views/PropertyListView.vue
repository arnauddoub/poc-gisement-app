<script setup lang="ts">
import { ref } from 'vue'
import BaseHeading from '@/components/base/BaseHeading.vue'
import usePropertyQuery from '@/modules/property/composables/usePropertyQuery'
import PropertyListItem from '@/modules/property/components/PropertyListItem.vue'
import AddPropertyDialog from '@/modules/property/components/AddPropertyDialog.vue'

const { getProperties } = usePropertyQuery()
const { data: properties } = getProperties()

const showAddPropertyDialog = ref(false)
</script>

<template>
  <div class="flex mb-10 items-center justify-between">
    <BaseHeading type="h1">Tous vos logements</BaseHeading>
    <Button outlined label="Ajouter" @click="showAddPropertyDialog = true" />
  </div>

  <div class="grid gap-6">
    <PropertyListItem v-for="property in properties" :key="property.id" :property="property" />
  </div>

  <AddPropertyDialog v-model="showAddPropertyDialog" />
</template>
