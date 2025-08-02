// src/router/index.ts  (o index.js si no usas TS)
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/salarios',
    component: () => import('@/features/salarios/SalariosPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/NotFound.vue')     // o bórralo si aún no existe
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router