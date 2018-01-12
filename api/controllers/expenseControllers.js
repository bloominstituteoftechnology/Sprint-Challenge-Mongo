const mongoose = require('mongoose');

const Expense = require('../models/Expense');

const expenseCreate = (req, res) => {
    const { amount, description, budget, category } = req.body;
    const expense = new Expense({ amount, description, budget, category });

    expense.save()
        .then((newExpense) => {
            res.status(201).json(newExpense);
        })
        .catch((error) => {
            res.status(500).json({error: error.message});
        });
}

const expenseRetreive = (req, res) => {
    Expense.find({})
        .then((expense) => {
            res.status(201).json(expense);
        })
        .catch((error) => {
            res.status(500).json({error: error.message});
        })
}