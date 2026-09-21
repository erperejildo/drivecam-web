import { createRouter } from 'vue-router'
import type { RouterHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FeaturesView from '@/views/FeaturesView.vue'
import PricingView from '@/views/PricingView.vue'
import GuideView from '@/views/GuideView.vue'
import BlogView from '@/views/BlogView.vue'
import BlogPostView from '@/views/BlogPostView.vue'
import LegalView from '@/views/LegalView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

export function createAppRouter(history: RouterHistory) {
  return createRouter({
    history,
    routes: [
      { path: '/', name: 'root', component: HomeView },
      { path: '/blog', redirect: '/en/blog' },
      { path: '/privacy', redirect: '/en/privacy' },
      { path: '/terms', redirect: '/en/terms' },
      {
        path: '/:locale(en|es)',
        children: [
          { path: '', name: 'home', component: HomeView },
          { path: 'features', name: 'features', component: FeaturesView },
          { path: 'pricing', name: 'pricing', component: PricingView },
          { path: 'guide', name: 'guide', component: GuideView },
          { path: 'blog', name: 'blog', component: BlogView },
          { path: 'blog/:slug', name: 'blog-post', component: BlogPostView },
          { path: 'privacy', name: 'privacy', component: LegalView },
          { path: 'terms', name: 'terms', component: LegalView },
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
