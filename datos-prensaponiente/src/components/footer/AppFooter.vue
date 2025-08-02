<!-- src/components/footer/AppFooter.vue -->
<template>
  <footer class="bg-neutral-800 text-neutral-300 px-6 py-12 text-sm">
    <div class="grid md:grid-cols-5 gap-8">
      <!-- Branding -->
      <div class="md:col-span-3">
        <h3 class="text-lg font-semibold text-white mb-1">Datos Prensa Poniente</h3>
        <p class="mb-6">Your go-to civic data resource!</p>
        <p class="text-neutral-400 text-xs">Datos Prensa</p>
      </div>

      <!-- Links -->
      <ul class="space-y-2">
        <li><span class="text-white">Help</span></li>
        <li><RouterLink to="#">FAQ</RouterLink></li>
        <li><RouterLink to="#">Customer service</RouterLink></li>
        <li><RouterLink to="#">How to use</RouterLink></li>
        <li><RouterLink to="#">Contact us</RouterLink></li>
      </ul>
    </div>
  </footer>
</template>

<script setup/>