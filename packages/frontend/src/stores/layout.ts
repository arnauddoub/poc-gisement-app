import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', () => {
  const layout = ref({
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    staticMenuMobileActive: false
  })

  const isSidebarActive = computed(() => layout.value.overlayMenuActive || layout.value.staticMenuMobileActive)

  const onMenuToggle = () => {
    if (window.innerWidth > 991) {
      layout.value.staticMenuDesktopInactive = !layout.value.staticMenuDesktopInactive
    } else {
      layout.value.staticMenuMobileActive = !layout.value.staticMenuMobileActive
    }
  }

  return {
    layout,
    onMenuToggle,
    isSidebarActive
  }
})
