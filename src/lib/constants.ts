export const SITE_CONFIG = {
  name: 'Luxury Service Website',
  description: 'Premium luxury services for discerning clients',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
}

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
}

export const ANIMATION_DURATION = {
  FAST: 0.3,
  NORMAL: 0.5,
  SLOW: 1,
}