<script setup lang="ts">
import { ref, watch, onMounted, defineModel, defineEmits } from 'vue'
import { useManifest } from '../composables/useManifest'

const model = defineModel<{ role?:string; region?:string; year?:number }>()
const emit  = defineEmits(['search'])

/* helpers ---------------------------------------------------------------- */
function update<K extends keyof NonNullable<typeof model.value>>(key: K, val: any) {
  (model.value ??= {} as any)[key] = val           // crea el objeto si es null
}
function handleSelect (e: Event) {
  const value = (e.target as HTMLSelectElement).value
  update('year', value ? Number(value) : undefined)
}
function handleInput (key:'role'|'region', e: Event) {
  update(key, (e.target as HTMLInputElement).value || undefined)
}

/* síncroniza con SalariosPage ------------------------------------------- */
watch(model, () => emit('search'), { deep:true })

/* años ------------------------------------------------------------------- */
/* const years = ref<number[]>([])
onMounted(async () => {
  const { years: y } = await useManifest()
  years.value = y
}) */
const { years } = useManifest()
</script>

<template>
  <form @submit.prevent="emit('search')" class="flex flex-wrap gap-4 mb-6">

    <select :value="model?.year" @change="handleSelect" class="input w-28">
      <option :value="undefined">Todos</option>
      <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
    </select>

    <input :value="model?.role"
           @input="handleInput('role', $event)"
           placeholder="Rol"    class="input w-40" />

    <input :value="model?.region"
           @input="handleInput('region', $event)"
           placeholder="Región" class="input w-40" />

    <button class="btn-primary px-6">Buscar</button>
  </form>
</template>