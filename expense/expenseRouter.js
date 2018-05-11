const express = require('express');

const Expense = require('./expenseModel');
const Category = require('../category/categoryModel.js');
const Budget = require('../budget/budgetModel.js');

const router = express.Router();

router.get('/', (req, res) => {

    Expense
        .find()
        .populate('budget')
        .populate('category')
        .then(exp => res.status(200).json(exp))
        .catch(err => {
            res.status(500).json(err);
        });
})

router.post('/', (req, res) => {
    const expenseData = req.body;

    const expense = new Expense(expenseData);

    expense
        .save()
        .then(expense => {
            res.status(200).json(expense)
        })
        .catch(err => {
            res.status(500).json(err)
        });
});

module.exports = router;