const express = require('express');
const router = express.Router();

const Expense = require('./Expense.js');

//add endpoints
router
    .route('/')
    .get((req, res) => {
        Expense
            .find()
            .populate('budget', '_id title budgetAmount')
            .populate('category', '_id title')
            .then(expenses => {
                res.status(200).json({ expenses })
            })
            .catch(error => {
                res.status(500).json({ error: error.message })
            })
})


router
    .route('/')
    .post((req, res) => {
        const { amount, description, budget, category } = req.body;
        const newExpense = new Expense({ amount, description, budget, category });
        newExpense
            .save()
            .then(newExpense => {
                res.status(201).json({ newExpense })
            })
            .catch(error => {
               res.status(500).json({ error: error.message })
            })
})

module.exports = router;