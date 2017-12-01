const mongoose = require('mongoose');

const Expense = require('../models/expense');

const expenseCreate = (req, res) => {
    const { amount, description } = req.body;
    const newExpense = new Expense({ amount, description });
    newExpense.save((err, createdExpense) => {
        if (err) {
            res.status(STATUS_USER_ERROR);
            res.json(err);
            return;
        }
        res.json(createdExpense);
    });
};

const expenseList = (req, res) => {
    const { id } = req.params;
    Expense.findById(id)
        .then(newExpense => {
            Expense.findById(newExpense._id)
            .populate('budget._id', 'category._id')
            .exec((badError, savedExpense) => {
                if (badError) {
                    throw new Error();
                }
                res.json(savedExpense);
            });
        })
        .catch(err => res.status(422).json(err));
};

module.exports = {
    expenseCreate,
    expenseList,
};