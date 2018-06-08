const express = require('express')

const Budget = require('./Budget.js')

const router = express.Router()

/* ### `POST to '/budgets'`

* Used to save a new budget to the database.
* Only worry about creating `ONE` budget for now.

* **NOTE** We only want to `create` a budget, no need to write a getter or even
  update the budget total directly. When we call for data to see how much is
  left in our budget, we'll write a separate endpoint that aggregates that
  information for us. We want to keep our budget total `'pure'` and unaffected
  by our queries. */
router
  .route('/')
  .get((req, res) => {
    Budget.find({})
      .then(budget => res.status(200).json(budget))
      .catch(err => res.status(500).json({ error: err.message }))
  })
  .post((req, res) => {
    const input = ({ title, budgetAmount } = req.body)
    if (title === '' || budgetAmount === '') {
      res.status(404).json({
        errorMessage:
          'Please check your input both title and budgetAmount cannot be blank'
      })
      return
    }
    const newBudget = new Budget(input)
    newBudget
      .save()
      .then(savedBudget => res.status(200).json(savedBudget))
      .catch(err => res.status(500).json({ error: err.message }))
  })
module.exports = router
