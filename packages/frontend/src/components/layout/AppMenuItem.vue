<script setup lang="ts">
import type { MenuLink } from '@/types/MenuLink'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

interface Props {
  link: MenuLink
  root?: boolean
}

withDefaults(defineProps<Props>(), {
  root: true
})

const isActiveMenu = ref(false)
</script>

<template>
  <li :class="{ 'layout-root-menuitem': root }">
    <div v-if="root" class="layout-menuitem-root-text">{{ link.label }}</div>
    <RouterLink v-if="link.to && !link.links" :to="link.to">
      <i :class="link.icon" class="layout-menuitem-icon"></i>
      <span class="layout-menuitem-text">{{ link.label }}</span>
      <i v-if="link.links" class="pi pi-fw pi-angle-down layout-menuitem-icon"></i>
    </RouterLink>
    <a v-else @click="isActiveMenu = !isActiveMenu">
      <i :class="link.icon" class="layout-menuitem-icon"></i>
      <span class="layout-menuitem-text">{{ link.label }}</span>
      <i v-if="link.links" class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
    </a>
    <Transition v-if="link.links" name="layout-submenu">
      <ul v-show="root ? true : isActiveMenu" class="layout-root-submenulist">
        <AppMenuItem v-for="subLink in link.links" :key="subLink.label" :link="subLink" :root="false"></AppMenuItem>
      </ul>
    </Transition>
  </li>
</template>

<style scoped lang="scss">
.layout-menu .layout-menuitem-root-text {
  font-size: 0.857rem;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--primary-color);
  padding: 1rem 2rem;
}

.layout-menu a {
  user-select: none;
}

.layout-menu .layout-root-menuitem > a {
  display: none;
}

.layout-menu .layout-root-submenulist {
  margin: 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
}

.layout-menu ul a {
  display: flex;
  align-items: center;
  position: relative;
  outline: 0 none;
  color: var(--text-color);
  cursor: pointer;
  padding: 0.75rem 2rem;
  transition:
    background-color 0.2s,
    box-shadow 0.2s;

  &.router-link-exact-active {
    font-weight: 700;
  }

  .layout-menuitem-icon {
    margin-right: 0.5rem;
    color: var(--primary-color);
  }

  &:hover {
    background-color: var(--surface-hover);
  }
}

.layout-menu ul ul li a {
  padding-left: 2.5rem;
}
</style>
