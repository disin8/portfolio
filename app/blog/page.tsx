import Link from 'next/link'
import { Suspense } from 'react'
import ViewCounter from './view-counter'
import { getViewsCount } from '@/lib/queries'
import { getBlogPosts } from '@/lib/blog'

export const metadata = {
  title: 'Writings',
  description: 'Read my thoughts on software development, design, and more.',
}

export default function BlogPage() {
  const allBlogs = getBlogPosts()

  return (
    <section className="w-full">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Writings
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          )
            return -1

          return 1
        })
        .map(post => (
          <Link
            key={post.slug}
            className="w-[calc(100% + 24px)] flex flex-row items-center gap-3 space-y-1 mb-4 -mx-3 rounded-lg px-3 py-2 no-underline hover:bg-link-highlight"
            href={`/blog/${post.slug}`}
          >
            <p>
              {post.metadata.title}
            </p>
            <div className="flex-1 relative before:content-[''] before:block before:h-[1px] before:bg-[#cecece]  dark:before:bg-[#606060]" />
            <Suspense fallback={<p className="h-6 tracking-tight text-gray-color text-sm font-light">... views</p>}>
              <Views slug={post.slug} />
            </Suspense>
          </Link>
        ))}
    </section>
  )
}

async function Views({ slug }: { slug: string }) {
  const views = await getViewsCount()

  return <ViewCounter allViews={views} slug={slug} />
}
