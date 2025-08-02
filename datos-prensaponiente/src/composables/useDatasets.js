// composables/useDatasets.ts
import { ref } from 'vue';
import api from '@/services/api';
export function useDatasets() {
    const upcoming = ref([]);
    async function fetchUpcoming() {
        upcoming.value = (await api.get('/datasets', { params: { status: 'scheduled' } })).data;
    }
    return { upcoming, fetchUpcoming };
}
