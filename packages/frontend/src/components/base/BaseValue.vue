<script setup lang="ts">
interface Props {
  vertical?: boolean
  label: string
  value?: string | number | null
}

withDefaults(defineProps<Props>(), {
  vertical: true,
  value: null
})
</script>

<template>
  <div class="flex flex-col">
    <span class="text-sm text-gray-400">{{ label }}</span>
    <span class="">{{ value }}</span>
  </div>
</template>
