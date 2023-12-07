<script setup lang="ts">
defineProps<{
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}>()
</script>

<template>
  <h1 v-if="type === 'h1'" class="font-semibold text-2xl md:text-3xl"><slot /></h1>
  <h2 v-else-if="type === 'h2'" class="font-semibold text-xl md:text-2xl"><slot /></h2>
  <h3 v-else-if="type === 'h3'" class="font-semibold text-lg md:text-xl"><slot /></h3>
  <h4 v-else-if="type === 'h4'"><slot /></h4>
  <h5 v-else-if="type === 'h5'"><slot /></h5>
  <h6 v-else><slot /></h6>
</template>
