import { InferType, object, string } from 'yup'

export const registerDto = object({
  name: string().required(),
  phoneNumber: string()
    .matches(/^\+?\d+$/, 'Phone number must be numeric')
    .required(),
  email: string().email().required(),
  password: string().required(),
})

export type RegisterDto = InferType<typeof registerDto>

export const loginDto = object({
  email: string().email().required(),
  password: string().required(),
})

export type LoginDto = InferType<typeof loginDto>
