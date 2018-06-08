const express = require('express');
const router = express.Router();
const Expense = require('./Expense');

router
    .route('/')
    .get((req, res) => {
        Expense
            .find()
            .populate('budget', 'budgetAmount')
            .populate('category', 'title')
            .then(expenses => {
                res.status(200).json(expenses);
            })
            .catch(err => {
                res.status(500).json({ error: err.message })
            })
    })
    .post((req, res) => {
        const { amount, description, budget, category } = req.body;
        const newExpense = new Expense({ amount, description, budget, category });
        if(!amount || !budget || !category){
            res.status(400).json({ error: "Please provide an amount, budget id and category id to create new Expense" });
            return;
        }
        newExpense
            .save()
            .then(expense => {
                res.status(201).json(expense);
            })
            .catch(err => {
                res.status(500).json({ error: "There was an error saving the expense to the database" })
            })
    })

module.exports = router;