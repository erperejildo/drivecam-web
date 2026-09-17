import { describe, expect, it } from 'vitest'
import { CONTACT_EMAIL, buildMailtoUrl } from '@/lib/mailto'

const values = { name: 'Ana Ruiz', email: 'ana@example.com', message: 'Hola & adiós <3' }

describe('buildMailtoUrl', () => {
  it('targets the support inbox', () => {
    const url = buildMailtoUrl(values, 'en')
    expect(url.startsWith(`mailto:${CONTACT_EMAIL}?`)).toBe(true)
  })

  it('encodes the subject and body', () => {
    const url = buildMailtoUrl(values, 'en')
    expect(url).toContain(encodeURIComponent('Ana Ruiz'))
    expect(url).toContain(encodeURIComponent('ana@example.com'))
    expect(url).not.toContain(' ')
    expect(url).not.toContain('<')
  })

  it('uses localized subjects', () => {
    const en = buildMailtoUrl(values, 'en')
    const es = buildMailtoUrl(values, 'es')
    expect(decodeURIComponent(en)).toContain('Message from Ana Ruiz')
    expect(decodeURIComponent(es)).toContain('Mensaje de Ana Ruiz')
    expect(en).not.toBe(es)
  })

  it('keeps the user message readable after decoding', () => {
    const url = buildMailtoUrl(values, 'es')
    const decoded = decodeURIComponent(url)
    expect(decoded).toContain('Hola & adiós <3')
    expect(decoded).toContain('ana@example.com')
  })
})
