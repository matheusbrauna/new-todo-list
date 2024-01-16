import { type Metadata } from 'next'

import { ResetPasswordConfirmForm } from '@/components/forms/reset-password-confirm-form'
import { Shell } from '@/components/shells/shell'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Reset Password',
  description: 'Enter your email to reset your password',
}

export default function ResetPasswordStep2Page() {
  return (
    <Shell className="max-w-lg">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Recuperar senha</CardTitle>
          <CardDescription>
            Digite o seu endereço de email e iremos enviar um código de
            recuperação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResetPasswordConfirmForm />
        </CardContent>
      </Card>
    </Shell>
  )
}
