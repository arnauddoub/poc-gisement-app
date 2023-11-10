import { createRouter, createWebHistory } from 'vue-router'

import AppLayout from '@/components/layout/AppLayout.vue'
import { useLayoutStore } from '@/stores/layout'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/housing',
          name: 'housing',
          component: () => import('../views/HousingView.vue')
        }
      ]
    }
  ]
})

router.afterEach(() => {
  const { layout } = useLayoutStore()
  layout.staticMenuMobileActive = false
  layout.overlayMenuActive = false
})

export default router
