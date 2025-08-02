// src/features/salarios/composables/useSalaries.ts
import { ref, watch } from 'vue';
import { useManifest } from './useManifest';
export function useSalaries() {
    const rows = ref([]);
    const total = ref(0);
    const loading = ref(false);
    const { ready, years, fileFor } = useManifest();
    /** carga una página */
    async function fetchPage(filters = {}, page = 1, pageSize = 50) {
        /* espera a que el manifest esté listo */
        if (!ready.value) {
            await new Promise(res => {
                const stop = watch(ready, val => { if (val) {
                    stop();
                    res();
                } });
            });
        }
        const year = filters.year ?? years.value[0];
        const file = fileFor(year);
        if (!file) {
            console.error('No existe JSON para el año', year);
            return;
        }
        loading.value = true;
        const data = await fetch(file).then(r => r.json());
        total.value = data.length;
        rows.value = data.slice((page - 1) * pageSize, page * pageSize);
        loading.value = false;
    }
    return { rows, total, loading, fetchPage };
}
