<script setup lang="ts">
import { useLayout } from '@/composables/useLayout'
import { useToggle } from '@vueuse/core'
import { isDark } from '@/composables/useDark'
import { useLayoutStore } from '@/stores/layout';

const { onMenuToggle } = useLayoutStore()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="layout-topbar">
    <div class="topbar-start">
      <Button
        severity="secondary"
        text
        class="topbar-menubutton"
        rounded
        style="padding: 1px"
        @click="onMenuToggle()"
      >
        <i class="pi pi-bars"></i>
      </Button>
    </div>
    <div class="topbar-end">
      <ul class="flex space-x-4 items-center">
        <li>
          <Button
            severity="secondary"
            :icon="`pi ${isDark ? 'pi-sun' : 'pi-moon'}`"
            text
            rounded
            @click="toggleDark()"
          />
        </li>
        <li>
          <div>
            <Avatar
              image="https://apollo.primevue.org/demo/images/avatar/avatar.png"
              shape="circle"
              style="border: none; margin-left: 0"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-topbar {
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.layout-topbar .topbar-start {
  display: flex;
  align-items: center;
}

.layout-topbar .topbar-start .topbar-menubutton i {
  font-size: 1.25rem;
  transition: color 0.2s;
}
</style>
