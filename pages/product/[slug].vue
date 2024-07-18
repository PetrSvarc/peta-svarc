<script setup lang="ts">
  import { computed } from "vue";
  import { useProduct } from "~/data/products";
  import { useAccessories } from "~/data/accessories";
  import AccessoryCard from "~/components/Accessories/AccessoryCard.vue";

  const route = useRoute()
  const { slug } = route.params

  const { data: product, isLoading: isLoadingProduct, isError: isErrorProduct } = useProduct(slug as string)
  const isWithAccessories = computed(() => {
    return product.value?.isWithAccessories ?? false
  })

  const { data: accessories, isLoading: isLoadingAccessories, isError: isErrorAccessories } = useAccessories(slug as string, isWithAccessories)

  definePageMeta({
    layout: "product",
  })
</script>

<template>
  <div v-if="isLoadingProduct">
    Loading...
  </div>
  <div v-else-if="!isErrorProduct">
    {{ product.name }}
  </div>
  <div v-else>
    Error
  </div>
  <div v-if="accessories">
    <div class="mb-8 leading-10 text-[28px] font-normal">Příslušenství</div>
    <div class="flex flex-wrap gap-4 justify-start w-full">
      <AccessoryCard
          v-for="accessory in accessories.items"
          :key="accessory.id"
          :title="accessory.name"
          :description="accessory.annotation"
          :image="accessory.mainImagePath"
          :slug="accessory.slug"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
