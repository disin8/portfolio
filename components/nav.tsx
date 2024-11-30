import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { ModeToggle } from './mode-toggle'
import { NavLinks } from './nav-links'
import ScrollToTop from './scroll-to-top'

export function Navbar() {
  return (
    <div
      className="toolbar rounded-2xl left-1/2 fixed bottom-5 z-20 inline-flex max-h-12 -translate-x-2/4 items-center gap-2 overflow-hidden bg-toolbar-color py-4 pl-4 pr-2 font-sans"
    >
      <NavLinks />
      <div className="h-6 w-px rounded-full bg-black/5 dark:bg-white/5"></div>
      <div className="inline-flex gap-[2px]">
        <div className="IconButton" data-state="closed">
          <ScrollToTop />
        </div>
        <div className="IconButton" data-state="closed">
          <ModeToggle />
        </div>
        <div className="IconButton" data-state="closed">
          <button
            className="hover:white flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-light-900 transition-colors duration-200 hover:bg-link-highlight hover:text-light-1000 dark:text-dark-900 hover:dark:bg-dark-500 dark:hover:text-dark-1000"
            aria-label="Scroll to top"
          >
            <a href="https://github.com/disin8/portfolio" target="_blank">
              <GitHubLogoIcon className="w-[20px] h-[20px]" />
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}
