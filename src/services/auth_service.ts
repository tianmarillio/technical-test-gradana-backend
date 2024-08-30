import { LoginDto, RegisterDto } from '../dtos/auth_dto'
import { GeneralError } from '../error/error_definition'
import { Bcrypt } from '../helpers/bcrypt'
import { Jwt } from '../helpers/jwt'
import { User } from '../models/user_model'

export class AuthService {
  static register = async (registerDto: RegisterDto) => {
    // Hash password & standardize email to lowercase
    registerDto = {
      ...registerDto,
      email: registerDto.email.toLowerCase(),
      password: Bcrypt.hash(registerDto.password),
    }

    // Check email & phone exist
    const foundUsers = await User.find({
      $or: [
        { email: registerDto.email },
        { phoneNumber: registerDto.phoneNumber },
      ],
    }).exec()

    if (!!foundUsers.length) {
      throw GeneralError.badRequest('Email or Phone Number already used')
    }

    const user = await User.create(registerDto)
    await user.save()

    return { id: user.id }
  }

  static login = async (loginDto: LoginDto) => {
    const foundUser = await User.findOne({
      email: loginDto.email.toLowerCase(),
    }).exec()

    if (!foundUser) {
      throw GeneralError.unauthorized()
    }

    // Compare password hash
    const isMatched = Bcrypt.compare(loginDto.password, foundUser.password!)

    if (!isMatched) {
      throw GeneralError.unauthorized()
    }

    // Grant jwt access token
    const accessToken = Jwt.sign({
      _id: foundUser._id,
      email: foundUser.email,
    })

    return { accessToken }
  }

  static authMe = async (userId: string) => {
    const foundUser = await User.findById(userId).exec()

    return {
      _id: foundUser?._id,
      name: foundUser?.name,
      phoneNumber: foundUser?.phoneNumber,
      email: foundUser?.email,
    }
  }
}
