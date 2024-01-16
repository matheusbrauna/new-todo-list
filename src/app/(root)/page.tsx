import { Metadata } from 'next'
import Link from 'next/link'

import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { env } from '@/env'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Home',
  description: 'Home',
}

export default function Home() {
  return (
    <div>
      <Link
        href="/signout"
        className={cn(
          buttonVariants({
            variant: 'secondary',
            size: 'icon',
          }),
        )}
      >
        <Icons.logout className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">Logout</span>
      </Link>
    </div>
  )
}
