import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createMemoryHistory } from 'vue-router'
import App from '@/App.vue'
import { createDriveCamApp } from '@/app'
import { reveal } from '@/directives/reveal'

async function mountApp(path: string) {
  const { router } = createDriveCamApp(createMemoryHistory())
  await router.push(path)
  await router.isReady()
  const wrapper = mount(App, {
    global: {
      plugins: [router],
      directives: { reveal },
    },
  })
  return { wrapper, router }
}

describe('App shell', () => {
  it('renders header, main and footer for the English home page', async () => {
    const { wrapper } = await mountApp('/en')
    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('main#main').exists()).toBe(true)
    expect(wrapper.find('footer').exists()).toBe(true)
    expect(wrapper.text()).toContain('DriveCam')
  })

  it('renders internal links to the features, pricing and guide pages', async () => {
    const { wrapper } = await mountApp('/en')
    const html = wrapper.html()
    expect(html).toContain('/en/features')
    expect(html).toContain('/en/pricing')
    expect(html).toContain('/en/guide')
  })

  it('renders the Spanish navigation for /es', async () => {
    const { wrapper } = await mountApp('/es')
    expect(wrapper.html()).toContain('/es/pricing')
    expect(wrapper.text()).toContain('Precios')
  })

  it('renders the not-found view for unknown routes', async () => {
    const { wrapper } = await mountApp('/en/does-not-exist')
    expect(wrapper.text()).toContain('404')
  })
})
