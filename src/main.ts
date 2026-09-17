import { createWebHistory } from 'vue-router'
import { createDriveCamApp } from './app'
import './styles/main.scss'

const { app, router } = createDriveCamApp(createWebHistory(import.meta.env.BASE_URL))

router.isReady().then(() => app.mount('#app'))
