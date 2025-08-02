<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import SalaryFilter from './components/SalaryFilter.vue'
import DataTable    from './components/DataTable.vue'
import Pagination   from '@/ui/Pagination.vue'
import { useManifest }  from './composables/useManifest'
import { useSalaries }  from './composables/useSalaries'

/* filtros y paginación */
const filters = reactive<{ year?:number; role?:string; region?:string }>({})
const page    = ref(1)

/* datos ------------------------------------------------------------------ */
const { rows, total, loading, fetchPage } = useSalaries()
const { ready, years } =  useManifest()            // importa ready


function search () { page.value = 1; fetchPage(filters, page.value) }
function changePage (p:number) { page.value = p; fetchPage(filters, p) }


onMounted(async () => {
  await ready.value                                     // 2 espera
  filters.year = years[0]                               // usa el más reciente
  fetchPage(filters, 1)
})

/* columnas --------------------------------------------------------------- */
const columns = [
  { key:'fullName', label:'Nombre' },
  { key:'role',     label:'Cargo' },
  { key:'region',   label:'Región' },
  { key:'grossPay', label:'Bruto', formatter:(v:number)=> v.toLocaleString('es-CL',{style:'currency',currency:'CLP'}) }
]

/* primera carga */
fetchPage({}, 1)
</script>

<template>
  <div class="bg-neutral-900 text-white min-h-screen px-6 py-12">
    <h1 class="text-3xl font-bold mb-6">Salarios públicos</h1>

    <SalaryFilter v-model="filters" @search="search" />

    <div v-if="loading" class="py-20 text-center">Cargando…</div>
    <template v-else>
      <DataTable :rows="rows" :columns="columns" />
      <Pagination :page="page" :total="total" @change="changePage" class="mt-6" />
    </template>
  </div>
</template>