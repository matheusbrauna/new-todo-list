import Link from 'next/link'

import { Shell } from '@/components/shells/shell'
import { siteConfig } from '@/config/site'

import { ModeToggle } from './mode-toggle'

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <Shell as="div">
        <section className="flex items-center justify-between">
          <div className="text-sm leading-loose text-muted-foreground">
            <span>
              Criado com 💙 por{' '}
              <Link
                href={siteConfig.links.portfolio}
                target="_blank"
                rel="noreferrer"
                className="font-bold hover:underline"
              >
                Matheus Braúna
              </Link>
            </span>
          </div>
          <div className="text-left text-sm leading-loose text-muted-foreground">
            <ModeToggle />
          </div>
        </section>
      </Shell>
    </footer>
  )
}
