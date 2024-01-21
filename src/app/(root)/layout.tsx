import { currentUser } from '@clerk/nextjs'

import { SiteFooter } from '@/components/layouts/site-footer'
import { SiteHeader } from '@/components/layouts/site-header'
import { ModalProvider } from '@/components/providers/modal-provider'

type LobbyLayoutProps = React.PropsWithChildren

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
  const user = await currentUser()

  return (
    <>
      <ModalProvider />
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader user={user} />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </>
  )
}
