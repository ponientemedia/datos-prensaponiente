<script setup lang="ts">
import ProjectList from '@/features/projects/components/ProjectList.vue'
</script>

<template>
  <section
    class="container mx-auto px-6 py-12
           flex flex-col md:flex-row gap-8"
  >
    <!-- sidebar -->
    <ProjectList />

    <!-- hero -->
    <div class="flex-1 flex items-center justify-center md:justify-start">
      <div class="max-w-lg">
        <h1 class="text-4xl font-semibold mb-2">
          Laboratorio de Datos<br>Prensa Poniente
        </h1>
      </div>
    </div>
  </section>
</template>