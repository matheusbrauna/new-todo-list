'use client'

import { Plus } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { DataTable } from '@/components/ui/data-table'
import { Heading } from '@/components/ui/heading'
import { useTodoModal } from '@/hooks/use-todo-modal'

import { columns } from './columns'

export function TodosTable() {
  const onOpen = useTodoModal((state) => state.onOpen)

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
      <DataTable columns={columns} data={[]} />
    </>
  )
}
