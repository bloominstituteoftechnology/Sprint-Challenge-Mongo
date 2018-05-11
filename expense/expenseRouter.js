const express = require('express');

const Expense = require('./Expense.js');
const Category = require('../category/Category');
const Budget = require('../budget/Budget');

const router = require('express').Router();

router
    .route('/')
    .get(get)
    .post(post)


function get(req, res) {
    Expense.find()
        .select('amount description')
        .populate('budget', 'title budgetAmount -_id')
        .populate('category', 'title -_id')
        .then(expense => {
            res.status(200).json(expense);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

function post(req, res) {
    const expenseInfo = req.body;
    const cost = req.body.amount;
    const budgetId = req.body.budget;
    Budget.findById(budgetId).then(budget => {
        if (budget.budgetAmount - cost > 0) {
            const expense = new Expense(expenseInfo)
            expense
                .save()
                .then(expense => {
                    Budget.findById(budgetId)
                        .then(budget => {
                            const newBalance = { budgetAmount: budget.budgetAmount - cost };
                            Budget.findByIdAndUpdate(budgetId, newBalance)
                                .then(budget => {
                                    const final = { ...expense._doc, budget: budget }

                                    res.status(200).json(final);
                                })
                        })
                })
                .catch(err => {
                    res.status(500).json(err);
                });
        } else {
            res.status(500).json("Budget insufficient");
        }
    })

}

module.exports = router;