import { sqliteTable, text, integer, int } from 'drizzle-orm/sqlite-core'

export const user = sqliteTable('user', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull().unique(),
  emailVerified: integer({ mode: 'boolean' }).$defaultFn(() => false).notNull(),
  image: text(),
  createdAt: integer({ mode: 'timestamp' }).$defaultFn(() => /* @__PURE__ */ new Date()).notNull(),
  updatedAt: integer({ mode: 'timestamp' }).$defaultFn(() => /* @__PURE__ */ new Date()).notNull()
})

export const session = sqliteTable('session', {
  id: int().primaryKey({ autoIncrement: true }),
  expiresAt: integer({ mode: 'timestamp' }).notNull(),
  token: text().notNull().unique(),
  createdAt: integer({ mode: 'timestamp' }).notNull(),
  updatedAt: integer({ mode: 'timestamp' }).notNull(),
  ipAddress: text(),
  userAgent: text(),
  userId: text().notNull().references(() => user.id, { onDelete: 'cascade' })
})

export const account = sqliteTable('account', {
  id: int().primaryKey({ autoIncrement: true }),
  accountId: text().notNull(),
  providerId: text().notNull(),
  userId: text().notNull().references(() => user.id, { onDelete: 'cascade' }),
  accessToken: text(),
  refreshToken: text(),
  idToken: text(),
  accessTokenExpiresAt: integer({ mode: 'timestamp' }),
  refreshTokenExpiresAt: integer({ mode: 'timestamp' }),
  scope: text(),
  password: text(),
  createdAt: integer({ mode: 'timestamp' }).notNull(),
  updatedAt: integer({ mode: 'timestamp' }).notNull()
})

export const verification = sqliteTable('verification', {
  id: int().primaryKey({ autoIncrement: true }),
  identifier: text().notNull(),
  value: text().notNull(),
  expiresAt: integer({ mode: 'timestamp' }).notNull(),
  createdAt: integer({ mode: 'timestamp' }).$defaultFn(() => /* @__PURE__ */ new Date()),
  updatedAt: integer({ mode: 'timestamp' }).$defaultFn(() => /* @__PURE__ */ new Date())
})
