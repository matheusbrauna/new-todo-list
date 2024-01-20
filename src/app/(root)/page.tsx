import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Metadata } from 'next'
import Link from 'next/link'

import { Icons } from '@/components/icons'
import { Shell } from '@/components/shells/shell'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { env } from '@/env'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: 'Home',
  description: 'Home',
}

export default function Home() {
  return (
    <Shell className="main-height max-w-3xl">
      <section className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 text-center">
        <div className="flex w-full space-x-2">
          <Input type="text" placeholder="Buscar tarefa..." />
          <Button size="icon">
            <MagnifyingGlassIcon className="h-4 w-4" />
          </Button>
        </div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Todo List</CardTitle>
            <CardDescription>Lista de todas as tarefas</CardDescription>
          </CardHeader>
          <CardContent>
            <ul>
              <ScrollArea className="h-96 pr-3">
                <li className="mb-2 flex h-9 items-center justify-between rounded-md border border-input px-3 py-1">
                  <span className="text-sm font-medium text-muted-foreground">
                    Tarefa 1
                  </span>
                  <Checkbox />
                </li>
              </ScrollArea>
            </ul>
          </CardContent>
        </Card>
      </section>
    </Shell>
  )
}
