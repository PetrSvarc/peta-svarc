<script setup lang="ts">
  import { navigateTo } from "#imports";
  import { computed, onMounted } from "vue";

  const IPHONE_XR_256GB_ZLUTA = 'iphone-xr-256gb-zluta'

  const route = useRoute()
  const { slug } = route.params
  const computedSlug = computed(() => {
    return slug ?? IPHONE_XR_256GB_ZLUTA
  })

  onMounted(() => {
    navigateTo(`/product/${computedSlug.value}`)
  })
</script>

