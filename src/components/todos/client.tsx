import { DataTable } from '@/components/ui/data-table'

import { TodosColumn, columns } from './columns'

export function TodosTable() {
  const data: TodosColumn[] = [
    {
      id: '1',
      description: 'Tarefa 1',
      createdAt: new Date().toDateString(),
    },
    {
      id: '2',
      description: 'Tarefa 2',
      createdAt: new Date().toDateString(),
    },
    {
      id: '3',
      description: 'Tarefa 3',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
    {
      id: '4',
      description: 'Tarefa 4',
      createdAt: new Date().toDateString(),
    },
  ]

  return <DataTable searchKey="description" columns={columns} data={data} />
}
