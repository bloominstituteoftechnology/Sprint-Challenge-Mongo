const express = require('express'); // remember to install your npm packages
const server = express();
const { Budget, Expense, Category } = require('./models.js')
const errors = require('./errors.js')

server.use(express.json())

server.post('/budgets', (req, res, next) => {
  const { title, budgetAmount } = req.body
  if (!title) { next(errors.budgetTitle) }
  if (!budgetAmount) { next(errors.budgetAmount)}
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

server.use((err, req, res, next) => {
  res.status(err.status).send({ error: err.message })
})

module.exports = server
