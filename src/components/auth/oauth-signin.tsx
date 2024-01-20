'use client'

import { isClerkAPIResponseError, useSignIn } from '@clerk/nextjs'
import { type OAuthStrategy } from '@clerk/types'
import { useState } from 'react'
import { toast } from 'sonner'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'

const oauthProviders = [
  { name: 'Google', strategy: 'oauth_google', icon: 'google' },
  { name: 'Facebook', strategy: 'oauth_facebook', icon: 'facebook' },
] satisfies {
  name: string
  icon: keyof typeof Icons
  strategy: OAuthStrategy
}[]

export function OAuthSignIn() {
  const [isLoading, setIsLoading] = useState<OAuthStrategy | null>(null)
  const { signIn, isLoaded: signInLoaded } = useSignIn()

  async function oauthSignIn(provider: OAuthStrategy) {
    if (!signInLoaded) return null
    try {
      setIsLoading(provider)
      await signIn.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: '/sso-callback',
        redirectUrlComplete: '/',
      })
    } catch (error) {
      setIsLoading(null)

      const unknownError = 'Algo deu errado. Por favor, tente novamente.'

      isClerkAPIResponseError(error)
        ? toast.error(error.errors[0]?.longMessage ?? unknownError)
        : toast.error(unknownError)
    }
  }

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
      {oauthProviders.map((provider) => {
        const Icon = Icons[provider.icon]

        return (
          <Button
            aria-label={`Sign in with ${provider.name}`}
            key={provider.strategy}
            variant="outline"
            className="w-full bg-background sm:w-auto"
            onClick={() => oauthSignIn(provider.strategy)}
            disabled={isLoading !== null}
          >
            {isLoading === provider.strategy ? (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            ) : (
              <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
            )}
            {provider.name}
          </Button>
        )
      })}
    </div>
  )
}
