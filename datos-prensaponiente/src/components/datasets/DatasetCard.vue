<!-- src/components/datasets/DatasetCard.vue -->
<template>
  <div class="relative overflow-hidden rounded-xl group cursor-pointer">
    <img :src="d.thumbnail" :alt="d.title"
         class="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"/>
    <span class="absolute bottom-4 left-4 bg-white text-neutral-900 text-xs font-semibold px-3 py-0.5 rounded-full">
      {{ d.badge }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ d: {thumbnail: string; title: string; badge: string} }>()
</script>