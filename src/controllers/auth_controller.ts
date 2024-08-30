import { Handler } from 'express'
import { loginDto, registerDto } from '../dtos/auth_dto'
import { AuthService } from '../services/auth_service'

export class AuthController {
  static register: Handler = async (req, res) => {
    try {
      const body = await registerDto.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      })
      const result = await AuthService.register(body)

      return res.json(result)
    } catch (error) {
      throw error
    }
  }

  static login: Handler = async (req, res) => {
    const body = await loginDto.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    })
    const result = await AuthService.login(body)

    return res.json(result)
  }

  static authMe: Handler = async (req, res) => {
    const userId = req.user?._id!
    const result = await AuthService.authMe(userId)

    return res.json(result)
  }
}
