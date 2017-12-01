const mongoose = require('mongoose');

const Expense = require('../models/expense');

const STATUS_USER_ERROR = 422;

const expenseCreate = (req, res) => {
    const { amount, description, budget, category } = req.body;
    const newExpense = new Expense({ amount, description, budget, category });

    newExpense.save(newExpense, (err, createdExpense) => {
        if (err) {
            res.status(500).json(err);
            return;
        }
        res.json(createdExpense);
    });
};

const expenseList = (req, res) => {
    Expense.find({})
        .then((expenses) => {
            if (!expenses || expenses.length === 0) {
                throw new Error();
            }
            res.json(expenses);
        })
        .catch((err) => {
            res.status(STATUS_USER_ERROR).json(err);
        });
};

module.exports = {
    expenseCreate,
    expenseList
}