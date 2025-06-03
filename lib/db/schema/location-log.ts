import { int, sqliteTable, text, real } from 'drizzle-orm/sqlite-core'
import { location } from './location'

export const locationLog = sqliteTable('locationLog', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text(),
  startedAt: int().notNull(),
  endedAt: int().notNull(),
  locationId: int().references(() => location.id),
  lat: real().notNull(),
  long: real().notNull(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now())
})
