'use client'

import { usePathname } from 'next/navigation'
import Banner from './Banner'

export default function ConditionalBanner() {
  const pathname = usePathname()

  // Don't show banner on homepage
  if (pathname === '/') {
    return null
  }

  return <Banner />
}