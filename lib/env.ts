import { z } from 'zod'

const EnvSchema = z.object({
  NODE_ENV: z.string(),
  NUXT_UI_PRO_LICENSE: z.string(),
  TURSO_DATABASE_URL: z.string(),
  TURSO_AUTH_TOKEN: z.string()
})

export type EnvSchema = z.infer<typeof EnvSchema>

export default EnvSchema.parse(process.env)
