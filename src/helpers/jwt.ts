import jwt, { JwtPayload } from 'jsonwebtoken'
import { env } from '../config/environment'

const jwtSecret: jwt.Secret = env.JWT_SECRET!

export class Jwt {
  static sign<T extends object>(payload: T) {
    return jwt.sign(payload, jwtSecret)
  }

  static verify<T>(token: string): T {
    return jwt.verify(token, jwtSecret) as T
  }
}
