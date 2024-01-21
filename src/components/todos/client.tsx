'use client'

import dayjs from 'dayjs'
import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Heading } from '@/components/ui/heading'
import { Todo } from '@/db/schema'
import { useTodoModal } from '@/hooks/use-todo-modal'

import { TodosColumn, columns } from './columns'

interface TodosTableProps {
  data: Todo[]
}

export function TodosTable({ data }: TodosTableProps) {
  const onOpen = useTodoModal((state) => state.onOpen)

  const formattedTodos: TodosColumn[] = data.map((todo) => ({
    id: todo.id,
    description: todo.description,
    createdAt: dayjs(todo.createdAt).format('DD/MM/YYYY'),
  }))

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Tarefas (${0})`}
          description="Gerencie sua lista de tarefas"
        />
        <Button onClick={onOpen}>
          <Plus className="mr-2 h-4 w-4" /> Adicionar tarefa
        </Button>
      </div>
      <DataTable columns={columns} data={formattedTodos} />
    </>
  )
}
