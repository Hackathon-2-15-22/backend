import { Router } from "express";
import * as expenseCtrl from "../controllers/expenses.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();

/*----------- Protected Routes -----------*/

router.use(decodeUserFromToken);
router.get("/", checkAuth, expenseCtrl.index);
router.get('/:id', checkAuth, expenseCtrl.show)
router.post("/", checkAuth, expenseCtrl.create);
router.put("/:id", checkAuth, expenseCtrl.update);
router.delete("/:id", checkAuth, expenseCtrl.delete);

export { router };
