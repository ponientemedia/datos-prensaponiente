// composables/useDatasets.ts
import { ref } from 'vue'
import api from '@/services/api'
import { DatasetMeta } from '@/types/models'

export function useDatasets() {
  const upcoming = ref<DatasetMeta[]>([])

  async function fetchUpcoming() {
    upcoming.value = (await api.get('/datasets', { params: { status: 'scheduled' } })).data
  }

  return { upcoming, fetchUpcoming }
}