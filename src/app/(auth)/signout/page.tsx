import type { Metadata } from 'next'

import { LogOutButtons } from '@/components/auth/logout-buttons'
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Shell } from '@/components/shells/shell'

export const metadata: Metadata = {
  title: 'Sign out',
  description: 'Sign out of your account',
}

export default function SignOutPage() {
  return (
    <Shell className="max-w-xs">
      <PageHeader
        id="sign-out-page-header"
        aria-labelledby="sign-out-page-header-heading"
        className="text-center"
      >
        <PageHeaderHeading size="sm">Logout</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Tem certeza de que deseja sair?
        </PageHeaderDescription>
      </PageHeader>
      <LogOutButtons />
    </Shell>
  )
}
