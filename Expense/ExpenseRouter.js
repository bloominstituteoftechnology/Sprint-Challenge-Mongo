const express = require('express');

const Expense = require('../Expense/ExpenseModel');

const router = express.Router();

router
.route('/')

    .get((req, res) => {
        Expense.find({})
        .populate('budget category')
        .then(expenses => {
            res.status(200).json(expenses);
        })
        .catch(err => {
            res.status(500).json(err);
        })
    })

    .post((req, res) => {
        const expense = new Expense(req.body);
        expense
            .save()
            .then(newExpense => {
                if(newExpense === null) {
                    res.status(404).json(newExpense);
                } else {
                    res.status(201).json(newExpense);
                }
            })
            .catch(err => res.status(500).json(err));
    }) 

module.exports = router;