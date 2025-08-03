<!-- src/features/salarios/layouts/SalaryShell.vue -->
<script setup>
import SalFilter from '../components/SalaryFilter.vue'
import AppFooter from '@/components/footer/AppFooter.vue'
</script>
<template>
  <div class="min-h-screen flex flex-col bg-neutral-900 text-white">
    <!-- podrías reusar tu Navbar pero esconder enlaces si quieres -->
    <!-- o un header completamente distinto -->
    <header class="…">  
      <!-- Banner / filtros específicos -->
    </header>

    <main class="flex-1 px-6">
      <RouterView/>
    </main>

    <!-- reusa el footer global -->
    <footer class="…">…</footer>
  </div>
</template>