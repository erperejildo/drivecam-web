import type { Directive } from 'vue'

export const reveal: Directive<HTMLElement, number | undefined> = {
  getSSRProps() {
    return {}
  },
  mounted(el, binding) {
    if (!('IntersectionObserver' in window)) return

    el.style.setProperty('--reveal-delay', `${binding.value ?? 0}ms`)
    el.classList.add('reveal-ready')

    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.disconnect()
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -3rem 0px' },
    )

    observer.observe(el)
  },
  unmounted(el) {
    el.classList.remove('reveal-ready', 'is-visible')
  },
}
