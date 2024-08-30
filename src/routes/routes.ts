import express from 'express'
import { AuthController } from '../controllers/auth_controller'
import { balanceRoutes } from './balance_routes'
import { authentication } from '../middlewares/authentication'

export const routes = express.Router()

routes.get('/', (req, res) => {
  return res.json({
    status: 'ok',
  })
})

routes.post('/register', AuthController.register)
routes.post('/login', AuthController.login)
routes.get('/auth-me', authentication, AuthController.authMe)

routes.use('/balances', authentication, balanceRoutes)
