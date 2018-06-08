const router = require('express').Router()

const Expense = require('../models/Expense')

router
    .route('/')
    .post((req, res) => {
        const { budget, category, amount, description } = req.body
        // Data Sanitization: 
        if (budget === undefined || category === undefined || amount === undefined || description === undefined) {
            res.status(400).json({ error: "Please provide all necessary data" })
        } else if (buget < 0 || typeof (category) != "string" || amount < 0 || typeof (description) != "string") {
            res.status(400).json({ error: "Please provide correct data entries" })
        } else {
            const newExpense = new Expense({ budget, category, amount, description })
            newExpense.save()
                .then(expense => res.status(201).json(expense))
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

module.exports = router;