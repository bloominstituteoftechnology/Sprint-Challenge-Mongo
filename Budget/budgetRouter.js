const express = require('express')
const router = express.Router()
const Budget = require('./budget.js')

router.post("/", (req, res) => {
    const budget = new Budget(req.body)
    budget.save()
    .then(newBudget => {
        res.status(201).json(newBudget)
    })
    .catch(error => {
        res.status(500).error({errorMessage: "Something went wrong. Please try again later."})
    })
})

module.exports = router