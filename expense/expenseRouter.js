const express = require('express')

const Expense = require('./Expense.js')

const router = express.Router()

// add endpoints here
router
  .route('/')
  .get((req, res) => {
    Expense.find()
      .then(expenses => {
        res.status(200).json(expenses)
      })
      .catch(err => {
        res.status(500).json({ errorMessage: 'Error getting expense', err })
      })
  })
  .post((req, res) => {
    const { body } = req
    const expense = new Expense(body.title)
    expense.save()
      .then(expense => {
        res.status(201).json(expense)
      })
      .catch(err => {
        res.status(500).json({ errorMessage: 'Expense item could not be posted', err })
      })
  })

router
  .route('/:id')
  .get((req, res) => {
    res.status(200).json({ route: '/api/expense/' + req.params.id })
  })
  .delete((req, res) => {
    res.status(200).json({ status: '/api/expense/' + req.params.id })
  })
  .put((req, res) => {
    res.status(200).json({ route: '/api/expense/' + req.params.id })
  })

module.exports = router
