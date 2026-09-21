import type { SiteLocale } from '@/content/types'

export const CONTACT_EMAIL = 'info@drivecam.store'

export const STORE_LINKS = {
  android: 'https://play.google.com/store/apps/details?id=com.drodriguez.drivecam',
  ios: 'https://apps.apple.com/es/app/drivecam-car-camera-recorder/id6791342778',
} as const

export interface ContactFormValues {
  name: string
  email: string
  message: string
}

export function buildMailtoUrl(values: ContactFormValues, locale: SiteLocale): string {
  const name = values.name.trim()
  const email = values.email.trim()
  const message = values.message.trim()
  const fallbackName = locale === 'es' ? 'un usuario' : 'a user'
  const subject =
    locale === 'es'
      ? `DriveCam — Mensaje de ${name || fallbackName}`
      : `DriveCam — Message from ${name || fallbackName}`
  const body =
    locale === 'es'
      ? `Nombre: ${name}\nEmail: ${email}\n\n${message}\n\n— Enviado desde la web de DriveCam`
      : `Name: ${name}\nEmail: ${email}\n\n${message}\n\n— Sent from the DriveCam website`
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
