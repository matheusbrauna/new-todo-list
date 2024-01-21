'use server'

import { auth } from '@clerk/nextjs'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { db } from '@/db'
import { NewTodo, todos } from '@/db/schema'

export async function createTodo(values: NewTodo) {
  const { userId } = auth()

  if (!userId) {
    redirect('/sign-in')
  }

  await db.insert(todos).values(values).returning()

  revalidatePath('/')
}
