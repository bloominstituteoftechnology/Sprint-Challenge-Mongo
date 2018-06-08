const express = require('express')
const Budget = require('./Budget.js')
const router = express.Router()

router
    .route('/')
    .post((req, res) => {
        const { title, budgetAmount } = req.body
        const newBudget = new Budget({ title, budgetAmount })
        if (!title || !budgetAmount) {
            res.status(400).json({ 
                userError: "Please provide a title and amount for your budget" 
            })
        } else {
            newBudget.save()
                .then( budget => {
                    res.status(201).json(budget)
                })
                .catch( err => {
                    res.status(500).json({
                        error: err.message
                    })
                })
        }
    })

module.exports = router