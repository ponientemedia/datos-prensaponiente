<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside
    class="rounded-xl bg-neutral-800/70 backdrop-blur
           border border-neutral-700 p-4 w-full md:w-64 shrink-0"
  >
    <h2 class="font-semibold mb-4">Proyectos Activos</h2>

    <ul class="space-y-2">
      <li>
        <RouterLink
          to="/salarios"
          class="text-sky-500 hover:underline"
        >
          ↳ Salarios municipales
        </RouterLink>
      </li>
      <!-- añadir más proyectos aquí -->
    </ul>
  </aside>
</template>