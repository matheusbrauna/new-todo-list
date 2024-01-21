import { create } from 'zustand'

interface UseTodoModalStore {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useTodoModal = create<UseTodoModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
