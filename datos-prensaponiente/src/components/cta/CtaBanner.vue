<!-- src/components/cta/CtaBanner.vue -->
<template>
  <section class="flex flex-col md:flex-row items-center justify-between bg-neutral-700 px-8 py-6 rounded-2xl">
    <div class="flex items-center space-x-4 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 flex-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.25 12a9.75 9.75 0 1119.5 0 9.75 9.75 0 01-19.5 0z"/>
        <path d="M8.25 12l2.998 3 4.502-5.25"/>
      </svg>
      <div>
        <h4 class="font-semibold">Psst!</h4>
        <p class="text-sm">Join our platform for exclusive insights and updates! Sign up today.</p>
      </div>
    </div>

    <button class="btn-outline">Join Now</button>
  </section>
</template>

<script setup/>