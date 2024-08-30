import express from 'express'
import { BalanceController } from '../controllers/balance_controller'

export const balanceRoutes = express.Router()

balanceRoutes.post('/', BalanceController.createMockTopup)
balanceRoutes.get('/total', BalanceController.getTotalBalance)
balanceRoutes.get('/history', BalanceController.getBalanceHistory)
