<template>
  <div>{{ data }}</div>
</template>

<script setup lang="ts">
  import { useQuery } from '@tanstack/vue-query'

  const fetcher = async () =>
      await fetch('https://frontapi.praguebest.cz/api-products/products/iphone-xr-256gb-zluta').then((response) =>
          response.json(),
      )

  const { data, suspense } = useQuery({ queryKey: ['test'], queryFn: fetcher })

  await suspense()
</script>
