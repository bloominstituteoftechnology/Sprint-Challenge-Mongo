import { Request, Response } from 'express'

import { Budget, Category, Expense } from '../models'

/**
 * POST /api/expense
 * Create a new expense.
 */
export const post = async (req: Request, res: Response) => {
  const { amount, description } = req.body
  let { budget, category } = req.body

  req.assert('amount', 'Invalid amount').isNumeric()
  req
    .assert('description', 'Description must be valid word characters')
    .matches(/\w/g)

  const errors = req.validationErrors()

  if (errors) return res.status(422).json({ errors })

  if (budget) {
    budget = await Budget.findOne({ title: budget }).exec()
    if (!budget) {
      return res
        .status(404)
        .json({ error: `Budget ${budget} could not be found` })
    }
  }

  if (category) {
    category = await Category.findOne({ title: category }).exec()
    if (!category) {
      return res
        .status(404)
        .json({ error: `Category ${category} could not be found` })
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
  const promise = await Expense.find()
    .select('-__v')
    .populate('budget category', '-_id title')
    .exec()

  promise && promise.length
    ? res.json(promise)
    : res.status(404).json({ error: 'No budgets found' })
}

/**
 * GET /api/aggregate
 * Aggregates all expenses and subtracts them from their respective budgets
 */
export const aggregate = async (req: Request, res: Response) => {
  const budgets = await Expense
    .aggregate([{
      $group: {
        _id: '$budget',
        count: { $sum: 1 },
        totalExpenses: { $sum: '$amount' },
      }
    }])
    .exec()
  const expenses = await Expense
    .find()
    .select('-_id -__v')
    .populate('budget category', '-__v')

  res.json({ budgets, expenses })
}
