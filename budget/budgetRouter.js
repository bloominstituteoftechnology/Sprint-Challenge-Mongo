// const express = require('express')
const router = express.Router()

const Budget = require('./Budget')

// add endpoints here
/* EXTRAS
router
  .route('/')
  .get(get)
  .post(post)

router
  .route('/:id')
  .get(getById)
  .delete(deleteBudget)
  .put(editBudget)
END EXTRAS */

// const {budget} = req.body
// const {budgetData} = req.body

// create budget
router
  .route('/')
  .get((req, res) => {
    Budget.find()
      .then(budgets => {
        res.status(200).json(budgets);
      })
      .catch(err => {
        res.status(500).json({ errorMessage: 'Error geting budgets', err })
      })
  })
  .post((req, res) => {
    const { body } = req
    const budget = new Budget(body)
    budget.save()
      .then(budget => {
        res.status(201).json(budget)
      })
      .catch(err => {
        res.status(500).json({ errorMessage: 'Budget item could not be posted', err })
      })
  })

router
  .router('/:id')
  .get((req, res) => {
    res.status(200).json({ route: '/api/budget/' + req.params.id })
  })
  .delete((req, res) => {
    res.status(200).json({ status: '/api/budget/' + req.params.id })
  })
  .put((req, res) => {
    res.status(200).json({ route: '/api/budget/' + req.params.id })
  })

module.exports = router
