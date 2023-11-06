<script setup lang="ts">
import { ref } from 'vue';
const iconClass = ref('pi-moon');

const onThemeToggler = () => {
  const root = document.getElementsByTagName('html')[0];

  root.classList.toggle('dark');
  iconClass.value = iconClass.value === 'pi-moon' ? 'pi-sun': 'pi-moon';
};
</script>

<template>
  <div class="flex mb-4 p-2 card justify-end">
    <button type="button" class="flex border-1 h-2rem p-0 w-2rem align-center justify-center" @click="onThemeToggler">
        <i :class="`dark:text-white pi ${iconClass}`" />
    </button>
  </div>
</template>