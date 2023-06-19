import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/logAndReg',
      name: 'LoginAndRegister',
      components: {
        default: () => import('@/pages/Auth.vue'),
      },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: () => import('@/components/auth/Login.vue'),
        },
        {
          path: 'register',
          name: 'Register',
          component: () => import('@/components/auth/Register.vue'),
        },
      ]
    },
    {
      path: '/',
      component: () => import('@/layout/DefaultLayout.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/pages/Home.vue'),
        },
        {
          path: 'work',
          name: 'Work',
          component: () => import('@/pages/Work.vue'),
        },
      ]
    }
  ]
})

export default router
