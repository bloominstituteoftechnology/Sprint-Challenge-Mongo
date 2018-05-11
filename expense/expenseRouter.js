const express = require('express');
const Expense = require('./expense');
const router = express.Router();

router 
    .route('/')
    .post((req, res) => {
        const expenseData = req.body;

        const expense = new Expense(expenseData);
        if (!expenseData.amount || !expenseData.description) {
            res.status(400).json("Please provide amount and description.");
        }
        else {
            expense
                .save()
                .then(expense => {
                    res.status(200).json(expense);
                }).catch(err => {
                    res.status(500).json("There was an error while saving expense information.")
                });
        };
    })
    .get((req, res) => {
        Expense.find({})
            .populate('budget category')
            .then(expense => {
                res.status(200).json(expense);
            }).catch(err => {
                res.status(500).json("Error finding expenses.");
            });
    });

module.exports = router;