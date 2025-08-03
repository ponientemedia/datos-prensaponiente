<!-- src/features/salarios/components/SkeletonTable.vue -->
<template>
  <div class="space-y-2">
    <div v-for="i in 8" :key="i"
         class="h-6 bg-neutral-700/50 rounded animate-pulse"></div>
  </div>
</template>