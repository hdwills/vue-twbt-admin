import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/views/layout/layout.vue'

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index')
    },
    {
      path: '/',
      name: 'Dashboard',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: '',
          component: () => import('@/views/dashboard/index')
        }
      ]
    },
    {
      path: '/test',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Test1',
          component: () => import('@/views/test/index')
        },
        {
          path: 'test',
          name: 'Test2',
          component: () => import('@/views/test/test')
        }
      ]
    }
  ]
})
