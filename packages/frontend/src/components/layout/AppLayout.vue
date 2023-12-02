<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterView } from 'vue-router'
import { storeToRefs } from 'pinia'
import { onClickOutside } from '@vueuse/core'
import { useLayoutStore } from '@/stores/layout'
import AppTopbar from './AppTopbar.vue'
import AppSidebar from './AppSidebar.vue'

const layoutStore = useLayoutStore()
const { layout, isSidebarActive } = storeToRefs(layoutStore)
const { onMenuToggle } = layoutStore

const appSidebarRef = ref(null)
const containerClass = computed(() => {
  return {
    'layout-static-inactive': layout.value.staticMenuDesktopInactive,
    'layout-mobile-active': layout.value.staticMenuMobileActive
  }
})

onClickOutside(appSidebarRef, () => {
  if (!isSidebarActive.value) return
  onMenuToggle()
})
</script>

<template>
  <div class="layout-container" :class="containerClass">
    <AppSidebar ref="appSidebarRef" />

    <div class="layout-content-wrapper">
      <AppTopbar />

      <div class="layout-content">
        <RouterView />
      </div>
    </div>

    <div class="layout-mask" />
  </div>
</template>

<style scoped lang="scss">
.layout-container {
  min-height: 100vh;

  @media screen and (max-width: 991px) {
    & :deep(.layout-sidebar) {
      z-index: 999;
      transform: translate(-100%);
      transition: transform 0.2s;
      box-shadow: none;
    }

    &.layout-mobile-active .layout-sidebar {
      transform: translate(0);
    }

    & .layout-mask {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 998;
      width: 100%;
      height: 100%;
      background-color: var(--maskbg);
    }

    &.layout-mobile-active .layout-mask {
      display: block;
      animation: 0.2s;
    }
  }

  @media screen and (min-width: 992px) {
    &.layout-static-inactive :deep(.layout-sidebar) {
      transform: translate(-100%);
    }

    &.layout-static-inactive .layout-content-wrapper {
      margin-left: 0;
    }
  }
}

.layout-content-wrapper {
  padding: 2rem;

  @media screen and (min-width: 992px) {
    & {
      margin-left: 18rem;
      transition: margin-left 0.2s;
    }
  }
}
</style>
