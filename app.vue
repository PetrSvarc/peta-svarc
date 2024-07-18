<template>
  <div>{{ isWithAccessories }}</div>
  <div v-if="isLoading">
    Loading...
  </div>
  <div v-else-if="!isError">
    {{ product }}
  </div>
  <div v-else>
    Error
  </div>
  {{ accessories }}
</template>

<script setup lang="ts">
  import { computed } from "vue";

  const IPHONE_XR_256GB_ZLUTA = 'iphone-xr-256gb-zluta'
  import { useProduct } from "~/data/products";
  import { useAccessories } from "~/data/accessories";

  const { data: product, isLoading, isError } = useProduct(IPHONE_XR_256GB_ZLUTA)
  const isWithAccessories = computed(() => {
    return product.value?.isWithAccessories ?? false
  })
  const { data: accessories } = useAccessories(IPHONE_XR_256GB_ZLUTA, isWithAccessories.value)
</script>
