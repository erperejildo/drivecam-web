import { createRouter } from 'vue-router'
import type { RouterHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FeaturesView from '@/views/FeaturesView.vue'
import PricingView from '@/views/PricingView.vue'
import GuideView from '@/views/GuideView.vue'
import LegalView from '@/views/LegalView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

export function createAppRouter(history: RouterHistory) {
  return createRouter({
    history,
    routes: [
      { path: '/', redirect: '/en' },
      {
        path: '/:locale(en|es)',
        children: [
          { path: '', name: 'home', component: HomeView },
          { path: 'features', name: 'features', component: FeaturesView },
          { path: 'pricing', name: 'pricing', component: PricingView },
          { path: 'guide', name: 'guide', component: GuideView },
          { path: 'legal', name: 'legal', component: LegalView },
        ],
      },
      { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
    ],
    scrollBehavior(to, _from, savedPosition) {
      if (savedPosition) return savedPosition
      if (to.hash) return { el: to.hash, top: 96, behavior: 'smooth' }
      return { top: 0 }
    },
  })
}
