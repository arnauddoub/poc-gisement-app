<script setup lang="ts">
import type { MenuLink } from '@/types/MenuLink'
import { ref } from 'vue'
import AppMenuItem from './AppMenuItem.vue'

const links = ref<MenuLink[]>([
  {
    label: 'Dashboard',
    links: [{ label: 'Tableau de bord', icon: 'pi pi-fw pi-chart-line', to: '/' }]
  },
  {
    label: 'Immobilier',
    links: [
      { label: 'Logements', icon: 'pi pi-fw pi-building', to: '/properties' }
      // { label: 'Locataires', icon: 'pi pi-fw pi-id-card', to: '/tenants' },
      // { label: 'Emprunts', icon: 'pi pi-fw pi-euro', to: '/loans' }
    ]
  }
])
</script>

<template>
  <div class="layout-menu-container">
    <ul class="layout-menu">
      <template v-for="link in links" :key="link.label">
        <AppMenuItem :link="link"></AppMenuItem>
      </template>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.layout-menu-container {
  overflow: auto;
  flex: 1;
  padding-bottom: 2rem;
}

.layout-menu {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>
