const router = require('express').Router()

const Expense = require('../models/Expense')

router
    .route('/')
    .post((req, res) => {
        const { budget, cat, amount, description } = req.body
        const newExpense = new Expense({ budget, cat, amount, description })
        newExpense.save()
            .then(expense => res.status(201).json(expense))
            .catch(err => console.log(err))
    })
    .get((req, res) => {
        Expense.find()
            .populate('category', { title: 1, _id: 0 })
            .populate('budget', { title: 1, budget: 1, _id: 0 })
            .then(expenses => res.status(200).json(expenses))
            .catch(err => console.log(err))
    })

module.exports = router;