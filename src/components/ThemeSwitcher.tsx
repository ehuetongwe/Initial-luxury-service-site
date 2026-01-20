'use client'

import { useState } from 'react'

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    // Theme switching logic will be implemented later
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
    >
      {isDark ? '☀️' : '🌙'}
      <span className="ml-2 text-sm">ThemeSwitcher Placeholder</span>
    </button>
  )
}