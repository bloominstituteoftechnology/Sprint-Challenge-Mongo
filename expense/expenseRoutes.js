const express = require('express');

const Expense = require('./Expense');

const router = express.Router();

router.get('/', (req, res) => {
    Expense.find()
        .select('amount description -_id')
        .populate('budget', 'amount -_id title')
        .populate('category', "title")
        .then(expenses => {
            res.status(200).json(expenses)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/', (req, res) => {
    const expenseData = req.body;
    const { amount, description, budget, category } = req.body;
    if (!amount || !description || !budget || !category) {
        res.status(400).json({ error: 'Please provide all of the required data' })
    }

    const expense = new Expense(expenseData);
    expense.save()
        .then(expense => {
            res.status(201).json(expense);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

module.exports = router;
