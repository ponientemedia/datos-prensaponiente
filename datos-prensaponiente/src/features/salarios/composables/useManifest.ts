// src/features/salarios/composables/useManifest.ts
import { ref } from 'vue'
interface DatasetMeta { year:number; file:string; records:number }

const datasets   = ref<DatasetMeta[]>([])
const loadedOnce = ref(false)

export async function useManifest () {
  if (!loadedOnce.value) {
    const res = await fetch('/data/datasets/salary_out/manifest.json')
    datasets.value = (await res.json()).datasets
    loadedOnce.value = true
  }
  return {
    ready:   loadedOnce,                                 // 👈 nuevo
    years:   datasets.value.map(d => d.year).sort((a,b)=>b-a),
    fileFor: (y:number) => datasets.value.find(d => d.year===y)?.file
  }
}