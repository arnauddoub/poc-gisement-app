<script setup lang="ts">
interface Props {
  vertical: boolean
  label: string
  value: string
}

withDefaults(defineProps<Props>(), {
  vertical: true
})
</script>

<template>
  <div class="flex flex-col">
    <span class="text-sm text-gray-400">{{ label }}</span>
    <span class="">{{ value }}</span>
  </div>
</template>
