'use client'
import { navLinks } from '@/config/nav'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function NavLinks() {
  const pathname = usePathname()

  return (
    <div className="flex flex-row gap-0.5 mr-1 text-sm text-light-900 selection:bg-light-accent selection:text-light-200 dark:text-dark-900 selection:dark:bg-dark-accent dark:selection:text-dark-200">
      <Link
        href="/"
        className={cn('transition-all hover:bg-link-highlight rounded-lg hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2', pathname === '/' && 'bg-link-highlight')}
      >
        home
      </Link>
      {Object.entries(navLinks).map(([path, { name }]) => {
        return (
          <Link
            key={path}
            href={path}
            className={cn('transition-all hover:bg-link-highlight rounded-lg hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2', pathname?.startsWith(path) && 'bg-link-highlight')}
          >
            {name}
          </Link>
        )
      })}
    </div>
  )
}
