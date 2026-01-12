import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/index',
    component: () => import('@/views/index/index.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
]

const router = createRouter({
  history: createWebHistory('/im/'),
  routes: routes,
})

export default router
