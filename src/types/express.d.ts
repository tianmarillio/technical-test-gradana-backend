import { Request } from 'express'
import { JwtPayload } from 'jsonwebtoken'

interface UserJwtPayload extends JwtPayload {
  _id: string
  email: string
}

declare global {
  namespace Express {
    interface Request {
      user?: UserJwtPayload
    }
  }
}
