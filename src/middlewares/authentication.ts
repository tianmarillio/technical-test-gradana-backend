import { NextFunction, Request, Response } from 'express'
import { GeneralError } from '../error/error_definition'
import { Jwt } from '../helpers/jwt'
import { UserJwtPayload } from '../types/express'
import { User } from '../models/user_model'

export async function authentication(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const accessToken = extractToken(req.headers?.authorization)
    const decryptedUser = Jwt.verify<UserJwtPayload>(accessToken)
    const foundUser = await User.findById(decryptedUser._id)

    if (!foundUser) {
      throw new Error()
    }

    req.user = decryptedUser
    next()
  } catch (error) {
    throw GeneralError.unauthorized()
  }
}

function extractToken(authHeader = '') {
  const [bearer, token] = authHeader?.split(' ')

  return token
}
