import { z } from 'zod'

const EnvSchema = z.object({
  NODE_ENV: z.string(),
  NUXT_UI_PRO_LICENSE: z.string().optional(),
  TURSO_DATABASE_URL: z.string().optional(),
  TURSO_AUTH_TOKEN: z.string().optional(),
  BETTER_AUTH_SECRET: z.string().optional()
})

export type EnvSchema = z.infer<typeof EnvSchema>

export default EnvSchema.parse(process.env)
