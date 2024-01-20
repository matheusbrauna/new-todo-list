'use client'

import { UserButton } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()

  const routes = [
    {
      href: '/',
      label: 'Home',
      active: pathname === '/',
    },
    {
      href: '/history',
      label: 'Histórico',
      active: pathname === '/history',
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <nav className={cn('flex items-center space-x-4 lg:space-x-6')}>
          <Link href="/" className="hidden items-center space-x-2 lg:flex">
            <CheckCircledIcon className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm font-medium transition-colors',
                route.active
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground/80',
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <UserButton afterSignOutUrl="/signin" />
        </div>
      </div>
    </header>
  )
}
