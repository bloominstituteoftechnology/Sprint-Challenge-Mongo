const express = require('express')

const Expense = require('./Expense.js')

const router = express.Router()

/* ### `'/expenses'`

* your expense should have a `'post'` method for creating the expense. To save
  an expense you'll need an `'budget'` `_id` and a `'category'` `_id` so that we
  can build out a relationship between those other collections and our expenses.
* your expense route should also have a `'get'` method that returns all the expenses with the populated data. */
router
  .route('/')
  .get((req, res) => {
    Expense.find()
      .then(expense => res.status(200).json(expense))
      .catch(err => res.status(500).json({ error: err.message }))
  })
  /* {
  _id: ObjectId('503c2b66bcf86cs793443564'),
  amount: 35,
  description: 'potatoes',
  budget: ObjectId('507f1f77bcf86cd799439011'), // Monthly Spending
  category: ObjectId('543d2c72gsb23cd657438921') // Groceries
} */
  .post((req, res) => {
    const input = ({ amount, description } = req.body)
    const newExpense = new Expense(input)
      .save()
      .then(savedExpense => res.status(200).json(savedExpense))
      .catch(err => res.status(500).json({ error: err.message }))
  })

router.route('/:id').get((req, res) => {
  const { id } = req.params
  Expense.findById(id)
    .then(foundExpense => res.status(200).json(foundExpense))
    .catch(err => res.status(500).json({ error: err.message }))
})

router.route('/:id').post((req, res) => {
  const { id } = req.params
  const { budgetID } = req.body
  Expense.findById(id)
    .then(foundExpense => {
      res.status(200).json(foundExpense)
      foundExpense.budget = [...foundExpense, budgetID]
      foundExpense
        .save()
        .then(savedExpense => res.status(200).json(savedExpense))
        .catch(err => res.status(500).json({ error: err.message }))
    })
    .catch(err => res.status(500).json({ error: err.message }))
})

router.route('/:id').post((req, res) => {
  const { id } = req.params
  const { categoryID } = req.body
  Expense.findById(id)
    .then(foundCategory => {
      res.status(200).json(foundCategory)
      foundCategory.category = [...foundCategory, categoryID]
      foundCategory
        .save()
        .then(savedExpense => res.status(200).json(savedExpense))
        .catch(err => res.status(500).json({ error: err.message }))
    })
    .catch(err => res.status(500).json({ error: err.message }))
})

module.exports = router
// Categoryid = 5b1ab11ca3361a6ee4d0be30
// budgetid = 5b1aadb96abea189848c3dcc
