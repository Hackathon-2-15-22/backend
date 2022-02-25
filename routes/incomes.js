import { Router } from 'express'
import * as incomeCtrl from '../controllers/incomes.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========= Public Routes ========= 


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.get('/', checkAuth, incomeCtrl.index)
router.get('/:id', checkAuth, incomeCtrl.show)
router.post('/', checkAuth, incomeCtrl.create)
router.put('/:id', checkAuth, incomeCtrl.update)
router.delete('/:id', checkAuth, incomeCtrl.delete)

export {
  router
}