<script setup lang="ts">
import Navbar    from '@/components/navbar/Navbar.vue'
import AppFooter from '@/components/footer/AppFooter.vue'
const props = defineProps<{
  hideNav?: boolean
}>()
</script>

<template>
  <div class="min-h-screen flex flex-col bg-neutral-900 text-white">
    <!-- NAV: sólo si no hideNav -->
    <Navbar v-if="!hideNav"/>

    <!-- CONTENIDO -->
    <main class="flex-1 flex justify-center items-center px-6 py-12">
      <RouterView/>
    </main>

    <!-- FOOTER -->
    <AppFooter />
  </div>
</template>