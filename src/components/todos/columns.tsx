'use client'

import { ColumnDef } from '@tanstack/react-table'

import { CellAction } from './cell-action'

export type TodosColumn = {
  id: number
  description: string
  createdAt: string
}

export const columns: ColumnDef<TodosColumn>[] = [
  {
    accessorKey: 'description',
    header: 'Descrição',
  },
  {
    accessorKey: 'createdAt',
    header: 'Data de criação',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
]
