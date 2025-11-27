import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/userHome.vue'
import Login from '@/views/userLogin.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'About',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
