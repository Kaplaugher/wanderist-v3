import { defineConfig } from 'drizzle-kit'
import env from './lib/env'

if (!env.TURSO_DATABASE_URL) {
  throw new Error('TURSO_DATABASE_URL is not set')
}

if (!env.TURSO_AUTH_TOKEN) {
  throw new Error('TURSO_AUTH_TOKEN is not set')
}

export default defineConfig({
  out: './lib/db/migrations',
  schema: './lib/db/schema/index.ts',
  casing: 'snake_case',
  dialect: 'turso',
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN
  }
})
