<!-- src/features/salarios/pages/SalaryListPage.vue -->
<template>
  <div class="min-h-screen bg-neutral-900 text-white p-6">
    <h1 class="text-2xl font-bold mb-4">Listado de salarios</h1>

    <!-- 1. Barra de filtros -->
    <div class="mb-6 flex flex-wrap gap-4">
      <select
        v-model="filters.year"
        class="bg-neutral-800/70 backdrop-blur text-white px-3 py-2 rounded focus:outline-none"
      >
        <option
          v-for="y in years"
          :key="y"
          :value="y"
        >
          Año {{ y }}
        </option>
      </select>

      <select
        v-model="filters.role"
        class="bg-neutral-800/70 backdrop-blur text-white px-3 py-2 rounded focus:outline-none"
      >
        <option disabled value="">Filtrar por cargo</option>
        <option v-for="r in roles" :key="r" :value="r">{{ r }}</option>
      </select>

      <select
        v-model="filters.region"
        class="bg-neutral-800/70 backdrop-blur text-white px-3 py-2 rounded focus:outline-none"
      >
        <option disabled value="">Filtrar por región</option>
        <option v-for="loc in locations" :key="loc" :value="loc">{{ loc }}</option>
      </select>

      <button
        @click="applyFilters"
        class="ml-auto bg-red-500 hover:bg-red-600 px-4 py-2 rounded font-semibold"
      >
        Aplicar
      </button>
    </div>

    <!-- 2. Tabla con paginación -->
    <v-card class="overflow-auto">
      <v-data-table
        :headers="headers"
        :items="rows"
        :items-per-page="itemsPerPage"
        :page.sync="page"
        :loading="loading"
        dense
      >
        <template #item.grossPay="{ item }">
          {{ item.grossPay.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) }}
        </template>

        <template #footer>
          <v-row class="pa-4" align="center">
            <v-col cols="12" class="text-right">
              <v-pagination
                v-model="page"
                :length="pageCount"
                total-visible="7"
                circle
              />
            </v-col>
          </v-row>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useManifest }       from '../composables/useManifest'
import { useSalaries }       from '../composables/useSalaries'

// 1) obtenemos el listado de años del manifest
const { ready, years } = useManifest()

// 2) datos y lógica de paginación
const { rows, total, loading, fetchPage } = useSalaries()
const page         = ref(1)
const itemsPerPage = ref(10)

// 3) filtros
const filters = ref<{ year?: number; role?: string; region?: string }>({
  year: undefined,
  role: '',
  region: '',
})

// datos dummy para roles y regiones (o sácalos de tu backend)
const roles     = ['Administrador','Analista','Coordinador','Gestión']
const locations = ['RM','Valparaíso','Biobío','Araucanía']

// 4) cuando cambie página o se apliquen filtros, recargamos
watch(
  [() => page.value, () => filters.value],
  () => {
    if (ready.value) {
      fetchPage(filters.value, page.value, itemsPerPage.value)
    }
  },
  { immediate: true, deep: true }
)

// helper para forzar recarga (resetea la página a 1)
function applyFilters() {
  page.value = 1
  fetchPage(filters.value, 1, itemsPerPage.value)
}

// 5) paginación
const pageCount = computed(() => Math.ceil(total.value / itemsPerPage.value))

// 6) cabezeras de la tabla
const headers = [
  { text: 'Año',      value: 'year',     align: 'start' },
  { text: 'Nombre',   value: 'fullName', align: 'start' },
  { text: 'Cargo',    value: 'role',     align: 'start' },
  { text: 'Región',   value: 'region',   align: 'start' },
  { text: 'Bruto',    value: 'grossPay', align: 'end'   },
]
</script>

<style scoped>
/* ajusta tamaño de letra si quieres */
.v-data-table th,
.v-data-table td {
  font-size: 0.875rem;
  padding-top: 4px;
  padding-bottom: 4px;
}
</style>