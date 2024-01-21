import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const todos = pgTable('todos', {
  id: serial('id').primaryKey().notNull(),
  userId: text('user_id').notNull(),
  description: text('description').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

export type Todo = typeof todos.$inferSelect
export type NewTodo = typeof todos.$inferInsert
