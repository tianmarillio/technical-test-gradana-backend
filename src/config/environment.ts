import { InferType, number, object, string } from 'yup'
import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

export const envSchema = object({
  NODE_ENV: string()
    .oneOf(['development', 'test', 'production'])
    .default('development'),
  PORT: number().default(3000),
  DATABASE_URL: string().required(),
  DATABASE_NAME: string().required(),
  JWT_SECRET: string().required(),
})

export const env = envSchema.validateSync(process.env)

export type EnvSchema = InferType<typeof envSchema>
