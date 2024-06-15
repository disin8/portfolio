import Link from 'next/link'
import { ProjectLink } from '@/components/link'
import { socialLinks } from '@/config/links'
import { projectsList } from '@/config/projects'

export default function Page() {
  const projects = projectsList.slice(0, 5)

  return (
    <section className="w-full flex-1">
      <header className="mb-12 flex flex-col items-start">
        <a className="text-medium inline-block font-medium no-underline" href="/">Dmitry Sinkevich</a>
        <span className="text-medium font-normal text-gray-color">Front-end developer</span>
      </header>

      <div className="mb-6 font-medium text-light-mode-primary dark:text-dark-mode-primary sm:mb-6 text-grayz">About</div>
      <p className="leading-[1.5] text-light-mode-secondary dark:text-dark-mode-secondary text-gray-color">
        I'm a Front-end developer with experience in React.
        I craft &amp; build interfaces that are fluid. Passionate about interface design and attention to detail.
      </p>

      <div className="mt-12 mb-6 font-medium text-light-mode-primary dark:text-dark-mode-primary sm:mb-6 text-grayz">Experience</div>
      <div className="flex flex-col gap-y-3 mb-12">
        <div className="flex flex-row justify-between">
          <p>
            <span className="font-medium">NDA</span>
            , Middle Front-end developer
          </p>
          <p className="opacity-50 text-sm font-light">may 2023 - april 2024</p>
        </div>
        <hr />
        <div className="flex flex-row justify-between">
          <p>
            <Link className="font-medium underline underline-offset-2 transition-colors decoration-[#505050] hover:decoration-foreground" href="https://itechart.com">iTechArt</Link>
            , Front-end developer
          </p>
          <p className="opacity-50  text-sm font-light">september 2021 - april 2023</p>
        </div>
      </div>

      <div className="mb-6 font-medium text-light-mode-primary dark:text-dark-mode-primary sm:mb-6 text-grayz">Last projects</div>
      <div className="w-full mb-12">
        {
          projects.map(post => (
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
          ))
}
      </div>

      <hr />

      <div className="flex flex-row items-center gap-1 mt-12 pb-12">
        {socialLinks.map(link => (
          <div className="flex items-center gap-1 group">
            <Link
              key={link.name}
              className="font-medium underline underline-offset-2 transition-colors decoration-[#505050] hover:decoration-foreground"
              href={link.url}
            >
              {link.name}
            </Link>
            <span className="group-last:hidden">
              {' · '}
            </span>
          </div>
        ),
        )}
      </div>

    </section>
  )
}
