import mongoose from 'mongoose'
import { env } from './environment'

export const connectToDatabase = async () => {
  try {
    mongoose.connect(env.DATABASE_URL, {
      dbName: env.DATABASE_NAME,
    })
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Failed to connect to MongoDB', error)
  }
}
