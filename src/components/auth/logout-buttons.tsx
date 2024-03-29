'use client'

import { SignOutButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

import { Icons } from '@/components/icons'
import { Button, buttonVariants } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { useMounted } from '@/hooks/use-mounted'
import { cn } from '@/lib/utils'

export function LogOutButtons() {
  const router = useRouter()
  const mounted = useMounted()
  const [isPending, startTransition] = useTransition()

  return (
    <div className="flex w-full items-center space-x-2">
      {mounted ? (
        <SignOutButton
          signOutCallback={() =>
            startTransition(() => {
              router.push(`${window.location.origin}/?redirect=false`)
            })
          }
        >
          <Button
            aria-label="Sim, quero sair."
            size="sm"
            className="w-full"
            disabled={isPending}
          >
            {isPending && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sim, quero sair.
          </Button>
        </SignOutButton>
      ) : (
        <Skeleton
          className={cn(
            buttonVariants({ size: 'sm' }),
            'w-full bg-muted text-muted-foreground',
          )}
        >
          Sim, quero sair.
        </Skeleton>
      )}
      <Button
        aria-label="Voltar para a página anterior"
        variant="outline"
        size="sm"
        className="w-full"
        onClick={() => router.back()}
        disabled={isPending}
      >
        Voltar
      </Button>
    </div>
  )
}
