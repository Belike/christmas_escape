import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from '@/components/LoginPage.vue'
import MainPage from '@/components/MainPage.vue'
import LoginFailed from '@/components/LoginFailed.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/app',
    name: 'App',
    component: MainPage
  },
  {
    path: '/fail',
    name: 'Fail',
    component: LoginFailed
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
