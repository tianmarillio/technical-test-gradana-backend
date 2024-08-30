import { CreateMockupTopupDto } from '../dtos/balance_dto'
import { Balance } from '../models/balance_model'

export class BalanceService {
  static getTotalBalance = async (userId: string) => {
    const totalBalance = await Balance.aggregate([
      {
        $match: { userId: userId },
      },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: '$amount' },
        },
      },
    ]).exec()

    const totalAmount = totalBalance?.[0]?.totalAmount ?? 0

    return { totalAmount }
  }

  static getBalanceHistory = async (userId: string) => {
    const balances = await Balance.find({ userId })
      .sort({ createdAt: 'desc' })
      .exec()

    return balances
  }

  static createMockTopup = async (
    userId: string,
    createDto: CreateMockupTopupDto,
  ) => {
    const balance = await Balance.create({
      userId,
      amount: createDto.amount,
    })

    await balance.save()

    return { _id: balance._id }
  }
}
