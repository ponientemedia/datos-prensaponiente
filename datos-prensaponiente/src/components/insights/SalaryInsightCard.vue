<!-- src/components/insights/SalaryInsightCard.vue -->
<template>
  <article class="min-w-[220px] rounded-xl bg-neutral-700 overflow-hidden shadow-lg">
    <div class="relative">
      <img :src="i.img" :alt="i.title" class="w-full h-32 object-cover"/>
      <span class="absolute top-2 left-2 rounded-full px-2 py-0.5 text-xs font-bold"
            :class="tagColor">{{ i.tag }}</span>
    </div>

    <div class="p-4">
      <h4 class="text-sm font-semibold mb-0.5">{{ i.title }}</h4>
      <p class="text-xs text-neutral-400">{{ i.subtitle }}</p>
      <p class="text-xs mt-1">{{ i.note }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{ i: {tag: string; title:string; subtitle:string; note:string; img:string} }>()
const tagColor = 'bg-red-600 text-white'
</script>