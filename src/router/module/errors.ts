import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'error',
  path: '/error',
  component: () => import('/@/layouts/error.vue'),
  children: [
    {
      name: 'error.404',
      path: '/error/404',
      component: () => import('/@/views/errors/404.vue')
    },
    {
      name: 'error.403',
      path: '/error/403',
      component: () => import('/@/views/errors/403.vue')
    },
    {
      name: 'error.500',
      path: '/error/500',
      component: () => import('/@/views/errors/500.vue')
    }
  ]
} as RouteRecordRaw
