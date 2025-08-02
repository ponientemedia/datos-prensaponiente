<!-- src/components/search/SearchBar.vue -->
<template>
  <form @submit.prevent="$emit('search', local)"
        class="w-full max-w-4xl bg-neutral-800 rounded-full flex overflow-hidden divide-x divide-neutral-700">
    <input v-model="local.q"         placeholder="What do you need?"   class="input" />
    <input v-model="local.role"      placeholder="Add role"            class="input" />
    <input v-model="local.location"  placeholder="Add location"        class="input" />
    <input v-model="local.salary"    placeholder="Select salary range" class="input" />

    <button class="bg-primary px-6 flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 8.25L21 12l-3.75 3.75M3 12h18"/>
      </svg>
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const local = reactive({ q:'', role:'', location:'', salary:'' })
</script>