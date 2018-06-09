import { Request, Response, Router } from 'express'
import { check, validationResult } from 'express-validator/check'

import { Budget } from '../models'

const router: Router = Router()

router.post('/', [
  check('budgetAmount', 'Budget amount is not valid').isNumeric(),
  check('title', 'Title cannot be blank').isLength({ min: 1 }).matches(/\w/)
], async (req: Request, res: Response) => {
  try {
    const { budgetAmount, title } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.mapped() })
    }
    const budget = new Budget({ budgetAmount, title })
    const response = await budget.save()
    res.status(201).json(response)
  } catch (err) {
    res.status(500).json({ message: 'Unable to save budget', error: err.message })
  }
})

router.get('/', async (req: Request, res: Response) => {
  try {
    const response = await Budget.find()
    response.length ? res.json(response) : res.json({ error: 'No budgets found' })
  } catch (err) {
    res.status(500).json({ message: 'Unable to retrieve budgets', error: err.message })
  }
})

export const BudgetCtrl: Router = router
