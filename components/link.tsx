import type { LinkProps } from 'next/link'
import type { PropsWithChildren } from 'react'
import Link from 'next/link'

interface IProjectLink extends PropsWithChildren<LinkProps> {
  date: number
}

export function ProjectLink({ date, children, ...props }: IProjectLink) {
  return (
    <Link
      className="w-[calc(100% + 24px)] flex flex-row items-start xs:items-center gap-3 space-y-1 mb-4 -mx-3 rounded-lg px-3 py-2 no-underline hover:bg-link-highlight"
      target="_blank"
      {...props}
    >
      {children}
      <div className="flex-1 relative before:content-[''] before:block before:h-[1px] before:bg-gray-color before:opacity-20" />
      <p className="tracking-tight text-gray-color text-sm font-light">{date}</p>
    </Link>
  )
}
