import { getBlogPosts } from '@/lib/blog'

export default async function sitemap() {
  const blogs = getBlogPosts().map(post => ({
    url: `https://disin8.vercel.app/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const routes = ['/', '/blog', '/work'].map(route => ({
    url: `https://disin8.vercel.app${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
