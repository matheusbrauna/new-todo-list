import { type Metadata } from 'next'

import { VerifyEmailForm } from '@/components/forms/verify-email'
import { Shell } from '@/components/shells/shell'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Verify Email',
  description: 'Verify your email address to continue with your sign up',
}

export default function VerifyEmailPage() {
  return (
    <Shell className="max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Verificar email</CardTitle>
          <CardDescription>
            Verifique seu email para completar sua conta
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <VerifyEmailForm />
        </CardContent>
      </Card>
    </Shell>
  )
}