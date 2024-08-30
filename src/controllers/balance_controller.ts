import { Handler } from 'express'
import { createMockupTopupDto } from '../dtos/balance_dto'
import { BalanceService } from '../services/balance_service'

export class BalanceController {
  static getTotalBalance: Handler = async (req, res) => {
    const userId = req.user?._id!
    const result = await BalanceService.getTotalBalance(userId)

    return res.json(result)
  }

  static getBalanceHistory: Handler = async (req, res) => {
    const userId = req.user?._id!
    const result = await BalanceService.getBalanceHistory(userId)

    return res.json(result)
  }

  static createMockTopup: Handler = async (req, res) => {
    const userId = req.user?._id!
    const body = await createMockupTopupDto.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    })
    const result = await BalanceService.createMockTopup(userId, body)

    return res.status(201).json(result)
  }
}
