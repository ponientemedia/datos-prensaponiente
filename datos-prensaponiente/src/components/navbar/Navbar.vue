<!-- src/components/navbar/Navbar.vue -->
<template>
  <header class="flex items-center justify-between px-6 py-4 bg-neutral-800">
    <!-- Logo -->
    <RouterLink to="/" class="text-2xl font-bold">Datos</RouterLink>

    <!-- Links desktop -->
    <nav class="hidden md:flex space-x-8 text-sm">
      <RouterLink v-for="item in menu" :key="item.to" :to="item.to" class="hover:text-primary">
        {{ item.label }}
      </RouterLink>
    </nav>

    <!-- CTA buttons -->
    <div class="space-x-3">
      <button class="btn-outline">Explore</button>
      <button class="btn-primary">Log in</button>
    </div>
  </header>
</template>

<script setup lang="ts">
interface MenuItem { label: string; to: string }
const menu: MenuItem[] = [
  { label: 'Public Salaries', to: '/salaries' },
  { label: 'Data Insights',   to: '/insights' },
  { label: 'Featured',        to: '/featured' },
]
</script>