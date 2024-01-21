'use client'

import { TodoModal } from '@/components/modals/todo-modal'
import { useMounted } from '@/hooks/use-mounted'

export const ModalProvider = () => {
  const isMounted = useMounted()

  if (!isMounted) {
    return null
  }

  return <TodoModal />
}
