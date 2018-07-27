import { Router } from 'express'

import {
  aggregate,
  getBudget,
  getCategory,
  getExpense,
  postBudget,
  postCategory,
  postExpense,
  welcome
} from '../controllers'
import { catchError } from '../utils/errors'

const router: Router = Router()

router.get('/welcome', welcome)

/* Budget Endpoints */
router.get('/budget', catchError(getBudget))
router.post('/budget', catchError(postBudget))

/* Category Endpoints */
router.get('/category', catchError(getCategory))
router.post('/category', catchError(postCategory))

/* Expense Endpoints */
router.get('/aggregate', catchError(aggregate))
router.get('/expense', catchError(getExpense))
router.post('/expense', catchError(postExpense))

export = router
