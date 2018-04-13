const mongoose = require('mongoose');

const router = require('express').Router();
const Expense = require('./expenseModel.js');
router
    .route('/')
    .post((req, res) => {
        const expense = new Expense(req.body);
        expense
        .save()
        .then(newExpense => {
            res.status(201).json(newExpense);
        })
        .catch(error => {
            res.status(500).json(error);
        });
    })
    .get((req, res) => {
        Expense.find({})
        .populate('budget')
        .populate('category')
        .then(response => {
            res.status(200).json(response);
        })
        .catch(error => {
            res.status(500).json(error);
        });
    });

    module.exports = router;