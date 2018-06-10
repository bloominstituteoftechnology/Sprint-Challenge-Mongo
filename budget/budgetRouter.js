const express = require('express')
const router = express.Router()

const Budget = require('./Budget')

// add endpoints here
/* EXTRAS
router.route('/')
  .get(get)
  .post(post)

router
  .route('/:id')
  .get(getById)
  .delete(deleteBudget)
  .put(editBudget)
*/
const {budget} = req.body
// const {budgetData} = req.body

// create budget
router.post(req, res)

const budget = new Budget(budgetData)
budget.save()
  .then(budget => {
    res.status(201).json(budget)
  })
  .catch(err => {
    res.status(500).json({ errorMessage: 'Budget item could not be posted', err
    })
  })
