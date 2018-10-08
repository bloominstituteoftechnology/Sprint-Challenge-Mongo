const mongoose = require('mongoose');

const Expense = require('../models/expense');

const createExpense = (req, res) => {
    const { amount, description, budget, category } = req.body;
    const newExpense = new Expense({ amount, description, budget, category });
    newExpense
        .save()
        .then(createdExpense => {
            res.json(createdExpense);
        })
        .catch(err => {
            res.status(422).json(err);
            return;
        });
};

const listExpenses = (req, res) => {
    Expense.find({})
        .populate('category', 'title')
        .populate('budget', 'title')
        .exec()
        .then(expenses => {
            if(expenses.length === 0) {
                res.status(500).json({errMessage: 'error!'});
                return;
            }
            res.json(expenses);
        })
        .catch(err => res.status(422).json(err));
}

module.exports = {
    createExpense,
    listExpenses,
}