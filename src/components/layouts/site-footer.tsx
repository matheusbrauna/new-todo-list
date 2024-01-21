import Link from 'next/link'

import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

import { ModeToggle } from './mode-toggle'

export function SiteFooter() {
  return (
    <footer className="border-t bg-background py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-20 md:flex-row">
        <small className="text-xs text-muted-foreground">
          Criado com 💙 por{' '}
          <Link
            href={siteConfig.links.portfolio}
            target="_blank"
            rel="noreferrer"
            className="font-bold hover:underline"
          >
            Matheus Braúna
          </Link>
        </small>
        <div className="col-span-2 flex items-center justify-between space-x-2 md:justify-end lg:col-span-1">
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Icons.gitHub className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Icons.linkedin className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </footer>
  )
}
