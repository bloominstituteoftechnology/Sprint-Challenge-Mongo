const express = require('express');
const router = express.Router();

const Expenses = require('./expense.js');
const Budget = require('../budget/budget.js');
const Category = require('../category/category.js');



router
    .route('/')
    .get((req,res) => {
        Expenses.find()
        .populate('budget', 'title budgetAmount -_id')
        .populate('category', 'title -_id')
        .then( expense => {
            res.status(200).json({ expense })
        })
        .catch(err => {
            res.status(500).json({ errorMessage: err})
        })
    })



    .post((req, res) => { 
        const { amount, description, budget, category }= req.body;
        const newExpenses = new Expenses({ amount, description, budget, category });
        newExpenses
            .save()
            .then(expense => {
                res.status(201).json({ expense })
            })
            .catch(err => {
                res.status(500).json({ errorMessage: err })
            })
    })

module.exports = router;