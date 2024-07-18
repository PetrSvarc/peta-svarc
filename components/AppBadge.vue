<script setup lang="ts">
const props = defineProps<{
  label: string,
  backgroundColor: string,
  textColor: string
}>()
</script>

<template>
  <div
      class="px-2 leading-6 text-[10px] font-normal"
      :class="`bg-[${props.backgroundColor}] text-[${props.textColor}]`"
  >
    {{ props.label }}
  </div>
</template>
