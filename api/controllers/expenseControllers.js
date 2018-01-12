const mongoose = require('mongoose');

const Expense = require('../models/expense');

const expenseCreate = (req, res) => {
    const { amount, description, budget, category } = req.body;
    const newExpense = new Expense({ amount, description, budget, category });

    newExpense
        .save()
        .then((savedExpense) => {
            res.status(200).json(savedExpense);
        })
        .catch((err) => {
            res.status(422).json(err);
        });
};

const listExpenses = (req, res) => {
    Expense.find()
        .populate({ path: 'budget', select: 'title budgetAmount' })
        .populate({ path: 'category', select: 'title' })
        .then((expenses) => {
            res.status(200).json(expenses);
        })
        .catch((err) => {
            res.status(422).json(err);
        });
};

module.exports = { expenseCreate, listExpenses };