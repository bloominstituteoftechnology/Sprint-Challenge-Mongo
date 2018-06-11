import { Request, Response } from 'express'

import { Category } from '../models'

/**
 * POST /api/category
 * Create a new category.
 */
export const post = async (req: Request, res: Response) => {
  req.assert('title', 'Title cannot be blank').isLength({ min: 1 }).matches(/\w/g)

  const errors = req.validationErrors()

  if (errors) return res.status(422).json({ errors })

  const category = new Category(req.body)
  const response = await category.save()
  res.status(201).json(response)
}

/**
 * GET /api/category
 * Fetch all categories.
 */
export const get = async (req: Request, res: Response) => {
  const promise = await Category.find().select('-__v').exec()
  promise && promise.length
    ? res.json(promise)
    : res.status(404).json({ error: 'No categories found' })
}
