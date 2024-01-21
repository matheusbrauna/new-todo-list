'use client'

import { CheckCircledIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

export function MainNav() {
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
    <div className="flex gap-6">
      <Link href="/">
        <CheckCircledIcon className="h-6 w-6" />
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
    </div>
  )
}
