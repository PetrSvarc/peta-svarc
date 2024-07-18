<script setup lang="ts">
  const props = defineProps<{
    title: string,
    description: string,
    slug: string,
    image: string,
  }>()
</script>

<template>
  <NuxtLink :to="`/product/${props.slug}`">
    <div class="border border-gray-400 w-[340px]">
      <div class="w-full h-[340px]">
        <img
            :src="props.image"
            :alt="props.title"
            class="w-full h-full object-cover" />
      </div>
      <div class="box-border p-8 flex flex-col gap-4 max-h-[223px]">
        <div class="h-[64px] text-2xl font-normal line-clamp-2">{{ props.title }}</div>
        <p class="text-sm line-clamp-4">{{ props.description }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>
