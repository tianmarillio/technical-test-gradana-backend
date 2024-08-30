import express from 'express'
import 'express-async-errors'
import cors from 'cors'

import { env } from './config/environment'
import { connectToDatabase } from './config/database'
import { routes } from './routes'
import { errorHandler } from './error/error_handler'

connectToDatabase()

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errorHandler)

app.listen(env.PORT, () => {
  console.log(`Server listening on port ${env.PORT}`)
})
