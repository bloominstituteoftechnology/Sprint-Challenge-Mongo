const express = require('express');
const Expense = require('../models/Expense');
const expenseController = express.Router();


expenseController
    .route('/')
    .get((req, res) => {
        Expense.find({})
            .populate('budget category')
            .then(expenses => {
                res.status(200).json(expenses)
            })
            .catch(error => {
                res.status(500).json(error)
            })
    })
    .post((req, res) => {
        const expense = new Expense(req.body);

        expense.save()
            .then(newExpense => {
                if (newExpense === null) {
                    res.stat(404).json(newExpense)
                }
                else {
                    res.status(201).json(newExpense)
                }
            })
            .catch(error => {
                res.status(500).json(error)
            })
    });
module.exports = expenseController;