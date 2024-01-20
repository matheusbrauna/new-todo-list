import { auth } from '@clerk/nextjs'
import { type Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { OAuthSignIn } from '@/components/auth/oauth-signin'
import { SignUpForm } from '@/components/forms/signup-form'
import { Shell } from '@/components/shells/shell'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Cria conta',
  description: 'Crie a sua conta',
}

export default async function SignUpPage() {
  const { userId } = auth()

  if (userId) {
    redirect('/')
  }

  return (
    <Shell className="max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Criar conta</CardTitle>
          <CardDescription>Escolha o seu método preferido</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <OAuthSignIn />
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                ou continue com
              </span>
            </div>
          </div>
          <SignUpForm />
        </CardContent>
        <CardFooter>
          <div className="text-sm text-muted-foreground">
            Já possui uma conta?{' '}
            <Link
              aria-label="Fazer login"
              href="/signin"
              className="text-primary underline-offset-4 transition-colors hover:underline"
            >
              Fazer login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </Shell>
  )
}
