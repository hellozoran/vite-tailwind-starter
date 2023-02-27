import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Blank from '../layout/Blank.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: Blank
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router