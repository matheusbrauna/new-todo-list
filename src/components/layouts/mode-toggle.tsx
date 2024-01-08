'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { Button } from '@/components/ui/button'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="group"
    >
      <SunIcon className="text-muted-foreground group-hover:text-foreground h-[1.5rem] w-[1.3rem] dark:hidden" />
      <MoonIcon className="text-muted-foreground group-hover:text-foreground hidden h-4 w-4 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
