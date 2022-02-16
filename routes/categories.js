import { Router } from "express"
import * as categoryCtrl from "../controllers/categories.js"
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js"

const router = Router()

/*----------- Protected Routes -----------*/

router.use(decodeUserFromToken)
router.get("/", checkAuth, categoryCtrl.index)
router.post("/", checkAuth,  categoryCtrl.create)
router.put("/:id", checkAuth, categoryCtrl.update)
router.delete("/:id", checkAuth, categoryCtrl.delete)

export { router }