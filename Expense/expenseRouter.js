const express = require('express');

const Expense = require('./Expense.js');

const router = express.Router();

router.get('/', (req, res) => {
    Expense.find()
    .select("description amount -_id")
    .populate('budget', "title budgetAmount -_id")
    .populate('category', "title -_id")
    .then((expense
    ) => {
        res.status(200).json(expense
        )
    })
})

router.post('/', (req, res) => {
    const { amount, description, budget, category } = req.body
    const newExpense = { amount, description, budget, category }
    const expense = new Expense(newExpense)
    .save()
    .then((response) => {
        res.status(200).json(response)
    })
    .catch((error)  => {
        res.status(500).json(error)
    })
})

module.exports = router;