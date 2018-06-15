const express = require('express');
const Expense = require('./Expense.js');

const router = express.Router();

router 
.route('/')
.get((req, res) => {
    Expense.find()
    .populate('budget')
    .populate('category')
    .then(expenses => {
        res.json(expenses)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})
.post((req, res) => {
    const { amount, description, budget } = req.body;
    const newExpense = new Expense({amount, description, budget});
    newExpense
    .save()
    .then(expenses => {
        res.status(200)
        res.json({ expenses })
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

module.exports = router;