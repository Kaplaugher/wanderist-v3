import { drizzle } from 'drizzle-orm/libsql'
import { createClient } from '@libsql/client'
import env from '../env'
import * as schema from './schema'

if (!env.TURSO_DATABASE_URL) {
  throw new Error('TURSO_DATABASE_URL is not set')
}

if (!env.TURSO_AUTH_TOKEN) {
  throw new Error('TURSO_AUTH_TOKEN is not set')
}

const client = createClient({
  url: env.TURSO_DATABASE_URL,
  authToken: env.TURSO_AUTH_TOKEN
})

const db = drizzle(client, { schema })

export default db
