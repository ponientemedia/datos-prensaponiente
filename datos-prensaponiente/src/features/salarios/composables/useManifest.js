// src/features/salarios/composables/useManifest.ts
import { ref, computed } from 'vue';
const datasets = ref([]);
const loadedOnce = ref(false);
/** carga (solo la primera vez) y expone datos del manifest */
export function useManifest() {
    if (!loadedOnce.value) {
        fetch('/data/datasets/salary_out/manifest.json')
            .then(r => r.json())
            .then(json => {
            datasets.value = json.datasets;
            loadedOnce.value = true;
        });
    }
    const years = computed(() => datasets.value.map(d => d.year).sort((a, b) => b - a));
    const fileFor = (y) => datasets.value.find(d => d.year === y)?.file;
    return { ready: loadedOnce, years, fileFor };
}
