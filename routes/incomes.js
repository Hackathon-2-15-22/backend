import { Router } from 'express'
import * as incomeCtrl from '../controllers/incomes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, incomeCtrl.create)

export {
  router
}