export type SiteLocale = 'en' | 'es'

export type RouteKey =
  'home' | 'features' | 'pricing' | 'guide' | 'blog' | 'privacy' | 'terms' | 'legal' | 'notFound'

export type IconName =
  | 'arrow'
  | 'battery'
  | 'bolt'
  | 'camera'
  | 'chart'
  | 'check'
  | 'clip'
  | 'close'
  | 'float'
  | 'gauge'
  | 'gps'
  | 'lock'
  | 'mail'
  | 'menu'
  | 'mic'
  | 'moon'
  | 'mount'
  | 'photo'
  | 'shield'
  | 'spark'
  | 'stream'
  | 'thermo'
  | 'wifi-off'

export interface NavLink {
  label: string
  to: string
}

export interface LinkItem {
  label: string
  href: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Stat {
  value: string
  label: string
}

export interface IconCard {
  icon: IconName
  title: string
  description: string
}

export interface GapPoint {
  title: string
  description: string
}

export interface Step {
  number: string
  title: string
  description: string
}

export interface PricingPlan {
  key: 'free' | 'lifetime'
  name: string
  badge: string | null
  price: string
  period: string
  summary: string
  features: string[]
  ctaLabel: string
  popular: boolean
}

export interface GuideSection {
  id: string
  number: string
  title: string
  paragraphs: string[]
  bullets: string[]
}

export interface LegalSection {
  id: string
  title: string
  paragraphs: string[]
}

export interface BlogPostTable {
  headers: string[]
  rows: string[][]
}

export interface BlogPostCallout {
  type: 'tip' | 'warning' | 'stat'
  title: string
  text: string
}

export interface BlogPostSection {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
  table?: BlogPostTable
  callout?: BlogPostCallout
}

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  dateFormatted: string
  readTime: string
  category: string
  keywords: string[]
  sections: BlogPostSection[]
  faqs?: FaqItem[]
  cta: {
    title: string
    body: string
    buttonText: string
  }
}

export interface BlogContent {
  eyebrow: string
  title: string
  description: string
  readArticle: string
  backToBlog: string
  publishedOn: string
  estimatedRead: string
  tableOfContentsTitle: string
  faqTitle: string
  ctaTitle: string
  ctaBody: string
  ctaButton: string
  articles: BlogPost[]
}

export interface ContactContent {
  eyebrow: string
  title: string
  description: string
  nameLabel: string
  namePlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  messageLabel: string
  messagePlaceholder: string
  submitLabel: string
  hint: string
  successTitle: string
  successBody: string
}

export interface PageMeta {
  title: string
  description: string
}

export interface SiteContent {
  locale: SiteLocale
  localeName: string
  meta: Record<RouteKey, PageMeta>
  header: {
    homeLabel: string
    links: NavLink[]
    cta: string
  }
  footer: {
    tagline: string
    navTitle: string
    links: NavLink[]
    legalTitle: string
    legalLinks: NavLink[]
    contactTitle: string
    contactBody: string
    stores: LinkItem[]
    madeByPrefix: string
    madeByBrand: string
    madeByHref: string
    rights: string
  }
  hero: {
    eyebrow: string
    title: string
    titleAccent: string
    description: string
    primaryCta: string
    secondaryCta: string
    badges: string[]
  }
  stats: {
    eyebrow: string
    items: Stat[]
  }
  gap: {
    eyebrow: string
    title: string
    description: string
    points: GapPoint[]
    closing: string
  }
  solution: {
    eyebrow: string
    title: string
    description: string
    steps: Step[]
    note: string
  }
  benefits: {
    eyebrow: string
    title: string
    description: string
    items: IconCard[]
  }
  features: {
    eyebrow: string
    title: string
    description: string
    items: IconCard[]
  }
  faq: {
    eyebrow: string
    title: string
    description: string
    items: FaqItem[]
  }
  download: {
    eyebrow: string
    title: string
    description: string
    note: string
  }
  contact: ContactContent
  pricing: {
    eyebrow: string
    title: string
    description: string
    trust: string
    plans: PricingPlan[]
    trial: {
      eyebrow: string
      title: string
      description: string
    }
    faqTitle: string
    faq: FaqItem[]
  }
  guide: {
    eyebrow: string
    title: string
    description: string
    intro: string[]
    sections: GuideSection[]
    lawTitle: string
    lawNote: string
    ctaTitle: string
    ctaBody: string
  }
  blog: BlogContent
  legal: {
    eyebrow: string
    title: string
    updated: string
    privacyTitle: string
    privacy: LegalSection[]
    termsTitle: string
    terms: LegalSection[]
    contactNote: string
  }
  notFound: {
    title: string
    description: string
    cta: string
  }
}
