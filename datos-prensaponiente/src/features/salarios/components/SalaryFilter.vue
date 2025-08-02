<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useManifest }           from '../composables/useManifest'

/* v-model */
const model = defineModel<{
  role?: string
  region?: string
  year?: number
}>()

/* lista de años leída del manifest */
const years = ref<number[]>([])
onMounted(async () => {
  const { years: y } = await useManifest()
  years.value = y
})

/* propaga cambios inmediatamente (si prefieres botón de búsqueda quita watch + @search) */
watch(model, val => emit('search'), { deep: true })

const emit = defineEmits(['search'])
</script>

<template>
  <form @submit.prevent="emit('search')" class="flex flex-wrap gap-4 mb-6">
    <select v-model="model.year" class="input w-28">
      <option :value="undefined">Todos</option>
      <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
    </select>

    <input v-model="model.role"   placeholder="Rol"    class="input w-40" />
    <input v-model="model.region" placeholder="Región" class="input w-40" />

    <button class="btn-primary px-6">Buscar</button>
  </form>
</template>