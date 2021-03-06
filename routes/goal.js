import { Router } from 'express'
import * as goalCtrl from '../controllers/goals.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, goalCtrl.index)
router.get('/:id', checkAuth, goalCtrl.show)
router.post("/", checkAuth, goalCtrl.create);
router.put("/:id", checkAuth, goalCtrl.update);
router.delete("/:id", checkAuth, goalCtrl.delete);

export { router }