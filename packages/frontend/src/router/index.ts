import { RouterView, createRouter, createWebHistory } from 'vue-router'

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
          path: '',
          name: 'dashboard',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/properties',
          name: 'properties',
          component: RouterView,
          children: [
            {
              path: '',
              name: 'properties.list',
              component: () => import('@/modules/property/views/PropertyListView.vue')
            },
            {
              path: ':id',
              name: 'properties.show',
              component: () => import('@/modules/property/views/PropertyView.vue'),
              redirect: { name: 'properties.show.summary' },
              children: [
                {
                  path: '',
                  name: 'properties.show.summary',
                  component: () => import('@/modules/property/views/tabs/PropertySummaryTab.vue')
                },
                {
                  path: 'transactions',
                  name: 'properties.show.transactions',
                  component: () => import('@/modules/property/views/tabs/PropertyTransactionsTab.vue')
                }
              ]
            }
          ]
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
