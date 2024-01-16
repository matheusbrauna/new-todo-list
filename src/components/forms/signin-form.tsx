'use client'

import { useSignIn } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'

import { Icons } from '@/components/icons'
import { PasswordInput } from '@/components/password-input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useOrigin } from '@/hooks/use-origin'
import { catchClerkError } from '@/lib/utils'
import { authSchema } from '@/lib/validations/auth'

type Values = z.infer<typeof authSchema>

export function SignInForm() {
  const origin = useOrigin()
  const router = useRouter()
  const { isLoaded, signIn, setActive } = useSignIn()
  const [isPending, startTransition] = useTransition()

  const form = useForm<Values>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(data: Values) {
    if (!isLoaded) return

    startTransition(async () => {
      try {
        const result = await signIn.create({
          identifier: data.email,
          password: data.password,
        })

        if (result.status === 'complete') {
          await setActive({ session: result.createdSessionId })

          router.push(`${origin}/`)
        } else {
          console.log(result)
        }
      } catch (err) {
        catchClerkError(err)
      }
    })
  }

  return (
    <Form {...form}>
      <form
        className="space-y-4"
        onSubmit={(...args) => form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="seuemail@exemplo.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <PasswordInput placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {isPending && (
            <Icons.spinner
              className="mr-2 h-4 w-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Entrar
          <span className="sr-only">Entrar</span>
        </Button>
      </form>
    </Form>
  )
}
