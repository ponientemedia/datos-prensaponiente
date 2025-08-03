<!-- Navbar.vue -->
<template>
  <header class="bg-neutral-800/70 backdrop-blur border-b border-neutral-700">
    <nav class="max-w-7xl mx-auto flex items-center gap-8 px-6 h-14 text-sm">
      <RouterLink to="/"         class="font-semibold link">Laboratorio Prensa Poniente</RouterLink>
      <RouterLink to="/salarios" class="link">Qué es nuestro Laboratorio</RouterLink>
      <RouterLink to="/insights" class="link">Por que existe?</RouterLink>
      <RouterLink to="/featured" class="link">Quienes nos apoyan?</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>