import { ProjectLink } from '@/components/link'
import { projectsList } from '@/config/projects'

export const metadata = {
  title: 'Projects',
}

export default function ProjectPages() {
  return (
    <section className="w-full">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Projects
      </h1>
      {projectsList
        .map(post => (
          <ProjectLink
            key={post.name}
            href={post.url}
            date={post.release}
          >
            <p>
              {post.name}
              <span className="ml-2 text-gray-color text-sm font-light">{post.description}</span>
            </p>
          </ProjectLink>
        ))}
    </section>
  )
}
