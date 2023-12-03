<script setup lang="ts">
defineProps<{
  label?: string
  forId?: string
}>()
</script>

<template>
  <div>
    <label :for="forId" class="font-medium mb-2 block">{{ label }}</label>
    <slot />
  </div>
</template>
