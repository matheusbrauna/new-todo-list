'use client'

import { TodoModal } from '@/components/modals/todo-modal'
import { useMounted } from '@/hooks/use-mounted'

interface ModalProviderProps {
  userId: string
}

export const ModalProvider = ({ userId }: ModalProviderProps) => {
  const isMounted = useMounted()

  if (!isMounted) {
    return null
  }

  return <TodoModal userId={userId} />
}
