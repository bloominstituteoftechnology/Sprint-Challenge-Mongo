const express = require('express')
const Budget = require('./Budget')

const router = express.Router()

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
  // .route('/')
  // .get((req, res) => {
  //   Budget.find()
  //     .then(budgets => {
  //       res.status(200).json(budgets)
  //     })
  //     .catch(err => {
  //       res.status(500).json({ errorMessage: 'Error geting budgets', err })
  //     })
  // })
  .post('/budget', (req, res) => {
    const budget = new Budget(req.body)
    budget.save()
      .then(budget => {
        res.status(201).json(budget)
          .catch(err => {
            res.status(500).json({ errorMessage: 'Budget item could not be posted', err })
          })
      })
  })

module.exports = router
