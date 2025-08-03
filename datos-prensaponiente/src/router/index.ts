// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AppShell       from '@/layouts/AppShell.vue'
import SalaryShell    from '@/features/salarios/layouts/SalaryShell.vue'

import Home           from '@/pages/Home.vue'
import SalariosPage   from '@/features/salarios/SalariosPage.vue'
import SalaryListPage from '@/features/salarios/pages/SalaryListPage.vue'
import NotFound       from '@/pages/NotFound.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Home,
    meta: { layout: 'app' }
  },
  {
    path: '/salarios',
    component: SalariosPage,
    meta: { layout: 'salary' }
  },
  {
    path: '/salarios/list',
    component: SalaryListPage,
    meta: { layout: 'salary' }
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    meta: { layout: 'app' }
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})