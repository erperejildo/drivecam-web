import { en } from './en'
import { es } from './es'
import type { SiteContent, SiteLocale } from './types'

export const content: Record<SiteLocale, SiteContent> = { en, es }

export const locales: SiteLocale[] = ['en', 'es']

export type * from './types'
