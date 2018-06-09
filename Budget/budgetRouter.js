const express = require('express')
const router = express.Router()
const Budget = require('./budget.js')

const handleError = (err, req, res, next) => {
    if (err.errors["title"]) {
      return res.status(400).json({ errorMessage: err.errors["title"].message })
    } else if (err.errors["budgetAmount"]) {
      return res.status(400).json({ errorMessage: err.errors["budgetAmount"].message })
    }else {
      return res.status(500).json({ errorMessage: "There was an error while saving budget to the database." })
    }
}

router.post("/", (req, res, next) => {
    const { title, budgetAmount } = req.body
    const budget = new Budget(req.body)
    budget.save()
    .then(newBudget => {
        res.status(201).json(newBudget)
    })
    .catch(error => {
        next(error)
    })
})

router.use(handleError);

module.exports = router