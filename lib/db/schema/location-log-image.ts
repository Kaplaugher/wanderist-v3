import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { locationLog } from './location-log'
import { user } from './auth'

export const locationLogImage = sqliteTable('locationLogImage', {
  id: int().primaryKey({ autoIncrement: true }),
  key: text().notNull(),
  url: text().notNull(),
  locationLogId: int().references(() => locationLog.id),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
  userId: int().notNull().references(() => user.id)
})
