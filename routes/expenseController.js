const router = require('express').Router()

const Expense = require('../models/Expense')
const Budget = require('../models/Budget')

router
    .route('/')
    .post((req, res) => {
        const { budget, category, amount, description } = req.body
        // Data Sanitization: 
        if (budget === undefined || category === undefined || amount === undefined || description === undefined) {
            res.status(400).json({ error: "Please provide all necessary data" })
        } else if (budget < 0 || typeof (category) != "string" || amount < 0 || typeof (description) != "string") {
            res.status(400).json({ error: "Please provide correct data entries" })
        } else {
            const newExpense = new Expense({ budget, category, amount, description })
            newExpense.save()
                .then(expense => {
                    Budget.findById(budget)
                        .then(result => {
                            newbudget = result.budget - expense.amount
                            console.log(newbudget)
                            Budget.findByIdAndUpdate(budget, { budget: newbudget })
                                .then(old => console.log(old))
                                .catch(err => console.log("update", err.message))
                        })
                    res.status(201).json(expense)
                })
                .catch(err => res.status(500).json({ error: err.message }))
        }
    })
    .get((req, res) => {
        Expense.find()
            .populate('category', { title: 1, _id: 0 })
            .populate('budget', { title: 1, budget: 1, _id: 0 })
            .then(expenses => res.status(200).json(expenses))
            .catch(err => console.log(err))
    })

router
    .route('/:id')
    .delete((req, res) => {
        const { id } = req.body
        console.log(id)
        Expense.findByIdAndRemove(id)
            .then(result => res.status(200).json(result))
            .catch(err => console.log(err))
    })

module.exports = router;