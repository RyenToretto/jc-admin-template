import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'auth',
  path: '/auth',
  component: () => import('/@/layouts/auth.vue'),
  redirect: '/auth/login',
  children: [
    {
      name: 'auth.login',
      path: '/auth/login',
      meta: {
        backgroundColor: '#cbd5e1'
      },
      component: () => import('/@/views/auth/login.vue')
    }
  ]
} as RouteRecordRaw
