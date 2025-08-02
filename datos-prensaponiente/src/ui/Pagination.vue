<script setup lang="ts">
const props = defineProps<{ page:number; total:number; size?:number }>()
const emit  = defineEmits(['change'])
const size  = props.size ?? 50
const pages = Math.ceil(props.total / size)
</script>

<template>
  <div v-if="pages > 1" class="flex gap-2 items-center justify-center">
    <button
      v-for="p in pages"
      :key="p"
      @click="emit('change', p)"
      :class="['px-3 py-1 rounded', p === page ? 'bg-primary text-white' : 'bg-neutral-700']">
      {{ p }}
    </button>
  </div>
</template>