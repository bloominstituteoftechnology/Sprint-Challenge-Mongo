import { Request, Response } from 'express'

import { Budget } from '../models'

/**
 * POST /api/budget
 * Create a new budget.
 */
export const post = async (req: Request, res: Response) => {
  req.assert('budgetAmount', 'Budget amount is not valid').isNumeric()
  req
    .assert('title', 'Title must be valid word characters')
    .isLength({ min: 1 })
    .matches(/\w/g)

  const errors = req.validationErrors()

  if (errors) return res.status(422).json({ errors })

  const budget = new Budget(req.body)
  const promise = await budget.save()
  res.status(201).json(promise)
}

/**
 * GET /api/budget
 * Fetch all budgets.
 */
export const get = async (req: Request, res: Response) => {
  const promise = await Budget.find().select('-__v').exec()
  promise && promise.length
    ? res.json(promise)
    : res.status(404).json({ error: 'No budgets found' })
}
