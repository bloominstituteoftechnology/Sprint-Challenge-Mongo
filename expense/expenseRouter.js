const express = require('express');
const Expense = require('./Expense.js');
const Budget = require('../budget/Budget.js');
const Category = require('../category/Category.js');

const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        Expense
            .find({})
            .populate('budget', 'title')
            .populate('category', 'title')
            .then(response => res.status(200).json({ data: response }))
            .catch(err => res.status(500).json(err))
    })
    .post((req, res) => {
        const newExpense = req.body
        if (newExpense.amount && newExpense.budget) {
            Budget.findById(newExpense.budget)
                .then(response => {
                    if (!response) {
                        res.status(404).json({ message: 'Non-existed budget. Please create a new budget.' })
                    }
                    else {
                        Expense.create(newExpense)
                            .then(response => res.status(200).json({ data: response }))
                            .catch(err => res.status(500).json(err))
                    }
                })
                .catch(err => res.status(500).json(err))
        }
        else {
            res.status(400).json({ message: 'Please provide expense amount and budget name' })
        }
    })

module.exports = router;
