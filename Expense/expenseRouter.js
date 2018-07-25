const express = require('express');
const Expense = require('./Expense.js');

const router = express.Router();

router
    .route('/')
    .get((req, res) => {
        Expense.find()
        .populate('budget', 'title budgetAmount')
        .then(expenseObj => {
            res.status(200).json(expenseObj);
        })
        .catch(err => {
            res.status(500).json({ err: 'Expense not found.'});
        })
    })
    .post((req, res) => {
        const { amount, description, budget: budget_ObjectId } = req.body;

        const newExpense = new Expense({ amount, budget: budget_ObjectId, description })

        newExpense.save()
        .then(newExpense => {
            res.status(201).json(newExpense);
        })
        .catch(err => {
            res.status(500).json({ err: 'Could not create an expense.'});
        })
    });

    module.exports = router;