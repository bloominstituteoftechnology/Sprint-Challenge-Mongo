import { Request, Response } from 'express'

import { Budget, Category, Expense } from '../models'

/**
 * POST /api/expense
 * Create a new expense.
 */
export const post = async (req: Request, res: Response) => {
  const { amount, budgetTitle, categoryTitle, description } = req.body
  let budget
  let category

  req.assert('amount', 'Invalid amount').isNumeric()
  req
    .assert('description', 'Description must be valid word characters')
    .matches(/\w/g)

  const errors = req.validationErrors()

  if (errors) return res.status(422).json({ errors })

  if (budgetTitle) {
    budget = await Budget.findOne({ title: budgetTitle }).exec()
    if (!budget) {
      return res
        .status(404)
        .json({ error: `Budget ${budgetTitle} could not be found` })
    }
  }

  if (categoryTitle) {
    category = await Category.findOne({ title: categoryTitle }).exec()
    if (!category) {
      return res
        .status(404)
        .json({ error: `Category ${categoryTitle} could not be found` })
    }
  }

  const expense = new Expense({
    amount,
    budget: budget ? budget._id : undefined,
    category: category ? category._id : undefined,
    description
  })
  expense.save()
  const promise = await expense.populate('budget category').execPopulate()
  res.status(201).json(promise)
}

/**
 * GET /api/expense
 * Fetch all expenses.
 */
export const get = async (req: Request, res: Response) => {
  const promise = await Expense
    .find()
    .select('-__v')
    .populate('budget category', '-_id title')
    .exec()
  promise && promise.length
    ? res.json(promise)
    : res.status(404).json({ error: 'No budgets found' })
}
