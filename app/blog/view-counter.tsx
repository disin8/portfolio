export default function ViewCounter({
  slug,
  allViews,
}: {
  slug: string
  allViews: {
    slug: string
    count: number
  }[]
  trackView?: boolean
}) {
  const viewsForSlug = allViews && allViews.find(view => view.slug === slug)
  const number = viewsForSlug?.count || 0

  return (
    <p className="tracking-tight text-gray-color text-sm font-light">
      {`${number.toLocaleString()} views`}
    </p>
  )
}
