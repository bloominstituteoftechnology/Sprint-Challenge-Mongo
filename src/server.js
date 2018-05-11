const mongoose = require('mongoose')
const express = require('express')
const server = express()
const Budget = require('./models/budget.js')
const Category = require('./models/category.js')
const Expense = require('./models/expense.js')
const errors = require('./errors.js')

server.use(express.json())

server.post('/budgets', (req, res, next) => {
  const { title, budgetAmount } = req.body
  if (!title) { next(errors.budgetTitle) }
  if (!budgetAmount) { next(errors.budgetAmount) }
  
  Budget.create({ title, budgetAmount })
    .then(budget => res.send(budget))
    .catch(() => next(errors.server))
})

server.post('/categories', (req, res, next) => {
  const { title } = req.body
  if (!title) { next(errors.categoryTitle) }

  Category.create({ title })
    .then(category => res.send(category))
    .catch(() => next(errors.server))
})

server.get('/categories', (req, res, next) => {
  Category.find()
    .select('title -_id')
    .then(categories => res.send(categories.map(c => c.title)))
    .catch(() => next(errors.server))
})

server.post('/expenses', (req, res, next) => {
  const { amount, description, budget, category } = req.body
  if (!amount) { next(errors.expenseAmount) }
  if (!description) { next(errors.expenseDescription) }
  if (!budget) { next(errors.expenseMissingBudget) }
  if (!category) { next(errors.expenseMissingCategory) }

  Budget.findById(budget).catch(() => next(errors.expenseInvalidBudget))
  Category.findById(category).catch(() => next(errors.expenseInvalidCategory))

  Expense.create({ amount, description, budget, category })
    .then(expense => res.send(expense))
    .catch(() => next(errors.server))
})

server.get('/expenses', (req, res, next) => {
  Expense.find()
    .populate('budget', 'title -_id')
    .populate('category', 'title -_id')
    .then(expenses => res.send(expenses))
    .catch((err) => next(err))
})

server.use((err, req, res, next) => {
  console.log(err)
  res.status(err.status).send({ error: err.message })
})

// Spin up the server inside a mongoose connection
mongoose
  .connect('mongodb://localhost/sprint')
  .then(() => {
    server.listen(3000, () => console.log('API Server running on port 3000'))
  })
  .catch(error => {
    console.error(error)
  })
