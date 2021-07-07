const express =  require('express');

const Expense = require('./expenseModel');
const Category = require('../category/categoryModel');
const Budget = require('../budget/budgetModel');

const router = express.Router();

// add endpoints here 

router
    .route('/')

    .get((req, res) => {
        Expense.find()
            .populate('budget', { title: 1, budgetAmount: 1, _id: 0})
            .populate('category', { title: 1, _id: 0})
            .select('amount description budget category -_id')
            .then(expenses => {
                res.json(expenses)
            })
            .catch(err => {
                res.status(500).json({ error: 'error fetching expenses'})
            })
    })

    .post((req, res) => {
        const expenseData = req.body;
        const expense = new Expense(expenseData);

        expense.save()
            .then(expense => {
                res.status(201).json(expense)
            })
            .catch(err => {
                res.status(500).json({ error: 'error saving expense'})
            });
    })



module.exports = router;