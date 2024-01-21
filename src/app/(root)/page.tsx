import { auth } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

import { Shell } from '@/components/shells/shell'
import { TodosTable } from '@/components/todos/client'
import { db } from '@/db'
import { todos } from '@/db/schema'
import { env } from '@/env'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Home',
  description: 'Home',
}

export default async function Home() {
  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  const data = await db.query.todos.findMany({
    where: eq(todos.userId, userId),
  })

  return (
    <Shell className="main-height">
      <div className="h-full flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <TodosTable data={data} />
        </div>
      </div>
    </Shell>
  )
}
