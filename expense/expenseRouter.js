const express = require('express');
const router = express.Router()
const Expense = require('./expense');
const Budget = require('../budget/budget');
const Category = require('../category/category');


router
    .route('/')
    .get((req, res) => {
        Expense.find()
        .populate('category', 'title -_id')
        .populate('budget', 'title budgetAmount -_id')
        .then(exFound => {
            res.status(200).json(exFound);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
    })
    .post((req, res) => {
        const { amount, description, category, budget } = req.body;
        const newExpense = new Expense({ amount, description, category, budget });
        newExpense
        .save()
        .then(savedNewEx => {
            res.status(201).json(savedNewEx);
        })
        .catch(error => {
            res.status(500).json({ error: error.message })
        });
    });

    module.exports = router;