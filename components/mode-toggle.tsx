'use client'

import { useTheme } from 'next-themes'
import * as React from 'react'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="hover:white flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-light-900 transition-colors duration-200 hover:bg-link-highlight hover:text-light-1000 dark:text-dark-900 hover:dark:bg-dark-500 dark:hover:text-dark-1000"
      aria-label="Scroll to top"
    >
      <div className="h-5 w-5 border border-black/10 bg-black dark:bg-white rounded-sm hover:border-black/20 transition-all ease-out"></div>
    </button>
  )
}
