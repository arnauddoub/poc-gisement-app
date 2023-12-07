<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useRouteParams } from '@vueuse/router'
import { STATUS_LABELS, CATEGORY_LABELS, STATE_LABELS, TYPE_LABELS } from 'shared/constants/PropertyConstant'
import usePropertyQuery from '../composables/usePropertyQuery'
import BaseValue from '@/components/base/BaseValue.vue'
import BaseHeading from '@/components/base/BaseHeading.vue'

const route = useRoute()
const router = useRouter()

const id = useRouteParams<number>('id')
const { getProperty } = usePropertyQuery()
const { data: property } = getProperty(id.value)

const items = ref([
  { label: 'Synthèse', icon: 'pi pi-home', route: 'properties.show.summary' },
  { label: 'Comptabilité', icon: 'pi pi-calculator', route: 'properties.show.transactions' },
  { label: 'Paramètres', icon: 'pi pi-cog' }
])
</script>

<template>
  <div class="grid gap-6">
    <div class="flex justify-between items-center">
      <BaseHeading type="h1">{{ property?.location.address }} {{ property?.location.zipCode }} {{ property?.location.city }}</BaseHeading>
      <Tag severity="info" :value="property?.status && STATUS_LABELS[property.status]" />
    </div>

    <div class="grid gap-2 grid-cols-1 card md:gap-6 md:grid-cols-5">
      <BaseValue label="Statut :" :value="property?.state && STATE_LABELS[property.state]" />
      <BaseValue label="Catégorie :" :value="property?.category && CATEGORY_LABELS[property.category]" />
      <BaseValue label="Type :" :value="property?.type && TYPE_LABELS[property.type]" />
      <BaseValue label="Surface :" :value="`${property?.surface} m²`" />
      <BaseValue label="Prix :" :value="`${property?.price} €`" />
    </div>

    <TabMenu
      :model="items"
      :active-index="items.findIndex((element) => element.route === route.name)"
      class="card overflow-hidden"
      style="padding: 0"
      @tab-change="({ index }) => router.push({ name: items[index].route })"
    />

    <RouterView />
  </div>
</template>
