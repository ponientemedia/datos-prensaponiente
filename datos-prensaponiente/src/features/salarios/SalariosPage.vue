<!-- src/features/salarios/SalariosPage.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

function goToList() {
  router.push('/salarios/list')
}
// — stub de imagenes y datos
// const bannerImage = './assets/banner.jpg'
import bannerImage from './assets/banner.jpg'  
import ds1 from './assets/ds1.svg'
import ds2 from './assets/ds2.svg'
import ds3 from './assets/ds3.svg'
import ds4 from './assets/ds4.svg'

const q           = ref('')
const role        = ref('')
const location    = ref('')
const salaryRange = ref('')
const showModal = ref(false)
const filters = ref({ year: 2023, role: '', region: '' })

// estos métodos los usarás para abrir tus pop-ups o dropdowns…
function openSearch() {
  // por ejemplo: mostrar un modal con un input; al cerrar lees su valor y lo guardas en `q.value`
  console.log('Abrir modal de búsqueda')
}

function openRoleFilter() {
  console.log('Abrir modal de selección de rol')
}

function openLocationFilter() {
  console.log('Abrir modal de selección de ubicación')
}

function openSalaryRange() {
  console.log('Abrir modal de rangos salariales')
}

function onSearch() {
  // aquí disparas tu fetchPage con { q, role, location, salaryRange }
  console.log({ q: q.value, role: role.value, location: location.value, salaryRange: salaryRange.value })
}
interface Dataset {
  image: string
  tag: string
}
const upcomingDatasets: Dataset[] = [
  { image: ds1, tag: 'Next Release' },
  { image: ds2, tag: 'New Data' },
  { image: ds3, tag: 'Features' },
  { image: ds4, tag: 'Improvements' },
]

const insights = [
  {
    label: 'Average',
    title: 'Average Salary',
    subtitle: 'Data from 2023',
    value: '$60,000',
  },
  {
    label: 'Details',
    title: 'Highest Salary',
    subtitle: 'Management',
    value: 'Up to $120,000',
  },
  {
    label: 'View',
    title: 'Lowest Salary',
    subtitle: 'Entry Level',
    value: 'Starting at $30,000',
  },
  {
    label: 'View',
    title: 'Average Growth',
    subtitle: 'Annual',
    value: '3% increase',
  },
  {
    label: 'Learn More',
    title: 'Data Transparency',
    subtitle: 'For All Citizens',
    value: 'Empower yourself!',
  },
]
</script>

<template>
  <div class="flex flex-col space-y-16">
    <!-- 1. Hero / Banner -->
    <section
      class="relative h-72 lg:h-[400px] rounded-2xl overflow-visible"
      :style="`background-image:url(${bannerImage}); background-size:cover; background-position:center`"
    >
      <div class="absolute inset-0 bg-black/50 z-10"></div>
      <div class="relative z-20 flex flex-col items-center justify-center h-full text-white px-6">
        <h1 class="text-4xl lg:text-5xl font-bold mb-2">Información Salarial de Municipalidades</h1>
        <p class="text-lg opacity-80">dicen que la transparencia importa!</p>
      </div>
    <!-- FilterBar convertido a botones -->
    <div
      class="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2
             w-[90%] lg:w-3/4 bg-neutral-900/80 backdrop-blur-lg
             rounded-full flex items-center divide-x divide-neutral-700
             shadow-lg overflow-visible
             z-30"
            
    >
      <!-- SEARCH como botón -->
      <div class="flex-1 px-4 py-3">
        <button  @click="$router.push({ path: '/salarios/list' })"
          class="w-full text-left text-xs text-neutral-400 uppercase bg-transparent focus:outline-none text-white">
          Listados 
        </button>

      </div>

      <!-- FILTER BY ROLE como botón -->
      <div class="flex-1 px-4 py-3">
        <button
          @click="openRoleFilter()"
          class="w-full text-left text-xs text-neutral-400 uppercase bg-transparent focus:outline-none text-white"
        >
          Gráficos
        </button>
      </div>

      <!-- FILTER BY LOCATION como botón -->
      <div class="flex-1 px-4 py-3">
        <button
          @click="openLocationFilter()"
          class="w-full text-left text-xs text-neutral-400 uppercase bg-transparent focus:outline-none text-white"
        >
          Filter by location
        </button>
      </div>

      <!-- SALARIES como botón -->
      <div class="flex-1 px-4 py-3">
        <button
          @click="openSalaryRange()"
          class="w-full text-left text-xs text-neutral-400 uppercase bg-transparent focus:outline-none text-white"
        >
          Salaries
        </button>
      </div>

      <!-- botón de disparar la búsqueda -->
      <button
        @click="onSearch()"
        class="px-5 py-3 bg-red-500 hover:bg-red-600 transition text-white"
      >
        ➔
      </button>
    </div>
    </section>

    <div class="px-6 lg:px-0">
      <!-- 3. Upcoming Datasets -->
      <h2 class="text-2xl font-semibold text-white mb-4">Upcoming Datasets</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(ds, i) in upcomingDatasets"
          :key="i"
          class="relative rounded-2xl overflow-hidden h-48 bg-black/20"
          :style="`background-image:url(${ds.image}); background-size:cover; background-position:center`"
        >
          <div class="absolute bottom-3 left-3 bg-white/90 text-sm px-3 py-1 rounded-full">
            {{ ds.tag }}
          </div>
        </div>
      </div>

      <!-- 4. Key Salary Insights -->
      <h2 class="text-2xl font-semibold text-white mt-12 mb-4">Key Salary Insights</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <div
          v-for="(ins, i) in insights"
          :key="i"
          class="bg-neutral-800/70 backdrop-blur-lg rounded-2xl p-4 flex flex-col justify-between"
        >
          <div class="flex items-center justify-between">
            <span class="bg-red-600 text-white text-xs px-2 py-1 rounded-full">{{ ins.label }}</span>
            <button class="text-white/50 hover:text-white"><i class="ph ph-info-circle"></i></button>
          </div>
          <h3 class="text-lg font-bold mt-3">{{ ins.title }}</h3>
          <p class="text-sm text-neutral-400">{{ ins.subtitle }}</p>
          <div class="mt-4 flex justify-between items-center">
            <span class="text-xl font-semibold">{{ ins.value }}</span>
            <button class="text-white/80 hover:text-white"><i class="ph ph-arrow-right"></i></button>
          </div>
        </div>
      </div>

      <!-- 5. CTA Banner -->
      <div class="mt-16 bg-neutral-800/70 backdrop-blur-lg rounded-2xl p-6 flex items-center justify-between">
        <div class="flex items-center gap-3 text-neutral-300">
          <i class="ph ph-hand-eye"></i>
          <div>
            <p class="font-semibold">Pssst!</p>
            <p class="text-sm">Join our platform for exclusive insights and updates! Sign up today.</p>
          </div>
        </div>
        <button class="btn-primary px-6 py-2">Join Now</button>
      </div>
    </div>
  </div>
</template>



<style scoped>
.btn-primary {
  @apply bg-white text-black font-semibold rounded-full;
}
</style>