import { createSSRApp } from 'vue'
import type { RouterHistory } from 'vue-router'
import App from './App.vue'
import { createAppRouter } from './router'
import { reveal } from './directives/reveal'

export function createDriveCamApp(history: RouterHistory) {
  const app = createSSRApp(App)
  const router = createAppRouter(history)
  app.use(router)
  app.directive('reveal', reveal)
  return { app, router }
}
