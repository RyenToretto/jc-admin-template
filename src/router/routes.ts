import { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      backgroundColor: '#ddd'
    },
    component: () => import('/@/views/home.vue')
  }
] as RouteRecordRaw[]

export default routes
