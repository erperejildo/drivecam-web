const base = import.meta.env.BASE_URL

export const images = {
  appIcon: `${base}img/app-icon.png`,
  appIconForeground: `${base}img/app-icon-foreground.png`,
  appLaunch: `${base}img/app-launch.png`,
  onboardingPhone: `${base}img/onboarding-phone.png`,
} as const
