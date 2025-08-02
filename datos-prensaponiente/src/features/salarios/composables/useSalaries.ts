// src/features/salarios/composables/useSalaries.ts
import { ref } from 'vue'
import { useManifest } from './useManifest'

export function useSalaries () {
  const rows = ref<any[]>([])
  const total = ref(0)
  const loading = ref(false)

  async function fetchPage (filters:any={}, page=1, pageSize=50) {
    loading.value = true

    /* espera manifest si aún no llegó */
    const { ready, years, fileFor } = await useManifest()
    await ready.value

    const year = filters.year ?? years[0]
    const file = fileFor(year)
    if (!file) {
      console.error('No existe JSON para el año', year)
      loading.value = false
      return
    }
    console.log('fileFor', year, file)
    const data = await fetch(file).then(r=>r.json())
    total.value = data.length
    rows.value  = data.slice((page-1)*pageSize, page*pageSize)
    loading.value = false
  }

  return { rows, total, loading, fetchPage }
}