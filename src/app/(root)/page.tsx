import { Plus } from 'lucide-react'
import { Metadata } from 'next'

import { Shell } from '@/components/shells/shell'
import { TodosTable } from '@/components/todos/client'
import { Button } from '@/components/ui/button'
import { env } from '@/env'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Home',
  description: 'Home',
}

export default function Home() {
  return (
    <Shell className="main-height">
      <div className="h-full flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between">
            <h1>Seu todos</h1>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Adicionar novo
            </Button>
          </div>
          <TodosTable />
        </div>
      </div>
    </Shell>
  )
}
