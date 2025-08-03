<script setup lang="ts">
import { computed } from 'vue'
import { useRoute }  from 'vue-router'

import AppShell    from '@/layouts/AppShell.vue'
import SalaryShell from '@/features/salarios/layouts/SalaryShell.vue'

const route = useRoute()

const Layout = computed(() =>
  route.meta.layout === 'salary'
    ? SalaryShell
    : AppShell
)
</script>

<template>
  <component :is="Layout">
    <RouterView/>
  </component>
</template>