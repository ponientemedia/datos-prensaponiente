<script setup lang="ts">
import { computed } from 'vue'

interface Col { key:string; label:string; formatter?:(v:any)=>string }

const props = defineProps<{
  rows: Record<string, any>[]
  columns: Col[]
}>()

const header = computed(() => props.columns.map(c => c.label))
</script>

<template>
  <div class="overflow-x-auto shadow-lg rounded-xl border border-neutral-800">
    <table class="min-w-full text-sm">
      <thead class="sticky top-0 bg-neutral-800 z-10">
       <tr class="even:bg-neutral-800/40 hover:bg-neutral-700/60 transition">
          <th v-for="h in header" :key="h" class="px-4 py-2 text-left">{{ h }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="r in rows" :key="r.id" class="border-b border-neutral-800 hover:bg-neutral-800/40">
          <td v-for="c in columns" :key="c.key" class="px-4 py-2">
            {{ c.formatter ? c.formatter(r[c.key]) : r[c.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>