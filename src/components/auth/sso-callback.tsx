'use client'

import { useClerk } from '@clerk/nextjs'
import { useEffect } from 'react'

import { type SSOCallbackPageProps } from '@/app/(auth)/sso-callback/page'
import { Icons } from '@/components/icons'

export function SSOCallback({ searchParams }: SSOCallbackPageProps) {
  const { handleRedirectCallback } = useClerk()

  useEffect(() => {
    handleRedirectCallback(searchParams)
  }, [searchParams, handleRedirectCallback])

  return (
    <div
      role="status"
      aria-label="Loading"
      aria-describedby="loading-description"
      className="flex items-center justify-center"
    >
      <Icons.spinner className="h-16 w-16 animate-spin" aria-hidden="true" />
    </div>
  )
}
