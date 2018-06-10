const express = require('express');
const Expense = require('../Expense/Expense');

const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        Expense.find()
        .then(expenseObj => {
            res.status(200).json(expenseObj);
        })
        .catch(err => {
            res.status(500).json({ err: 'Expense not found.'});
        })
    })
    .post((req, res) => {
        const budgetData = req.body;
        const budget = new Budget(budgetData);

        budget.save()
        .then(newBudget => {
            res.status(201).json(newBudget);
        })
        .catch(err => {
            res.status(500).json({ err: 'Could not create a budget.'});
        })
    });

    module.exports = router;