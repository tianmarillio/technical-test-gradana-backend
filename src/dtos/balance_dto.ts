import { InferType, number, object } from 'yup'

export const createMockupTopupDto = object({
  amount: number().required(),
})

export type CreateMockupTopupDto = InferType<typeof createMockupTopupDto>
