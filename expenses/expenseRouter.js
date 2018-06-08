const express = require('express');

const Expense = require('./Expense.js');

const router = express.Router();

router
    .route('/')
        .post((req,res) => {
            const newExpense = (new Expense({ amount, description, budget, category } = req.body));
                newExpense.save()
                    .then(expense => res.json(expense))
                    .catch(err => res.json(err))
        })
        .get((req, res) => {
            Expense.find()
                .populate('budget', 'title budgetAmount -_id')
                .populate('category', 'title -_id')
                .then(expenses => res.json(expenses))
                .catch(err => res.json(err))
        })

router
    .route('/category_totals')
        .get((req, res) => {
            Expense.aggregate([{
                $group: {
                    _id: "$category",
                    total: {$sum : "$amount"}
                }
            }])
                .then(totals => res.json( {totals} ))
                .catch(err => res.json(err))
        })

module.exports = router;