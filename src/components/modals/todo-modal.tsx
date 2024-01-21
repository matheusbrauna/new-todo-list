'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { createTodo } from '@/actions/create-todo'
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
import { Modal } from '@/components/ui/modal'
import { useTodoModal } from '@/hooks/use-todo-modal'
import { catchError } from '@/lib/utils'

const formSchema = z.object({
  description: z.string().min(1),
})

interface TodoModalProps {
  userId: string
}

export const TodoModal = ({ userId }: TodoModalProps) => {
  const { isOpen, onClose } = useTodoModal((state) => ({
    isOpen: state.isOpen,
    onClose: state.onClose,
  }))

  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      try {
        await createTodo({
          description: values.description,
          userId,
        })

        form.reset()
        toast.success('Store added successfully.')
      } catch (err) {
        catchError(err)
      }
    })
  }

  return (
    <Modal
      title="Criar tarefa"
      description="Crie uma nova tarefa"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descrição</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Qual sua próxima tarefa?"
                        disabled={isPending}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex w-full items-center justify-end space-x-2 pt-6">
                <Button
                  variant="outline"
                  onClick={onClose}
                  disabled={isPending}
                >
                  Cancelar
                </Button>
                <Button type="submit" disabled={isPending}>
                  Continuar
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  )
}
