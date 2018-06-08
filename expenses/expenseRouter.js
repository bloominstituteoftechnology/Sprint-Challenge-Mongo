const router = require('express').Router();
const Expense = require('./expenseModel');

router
    .route('/')
    .get((req, res) => {
        Expense
            .find()
            .then(expense => {
                res.status(200).json(expense)
            })
            .catch(error => {
                res.status(500).json({ error: error.message })
            })
    })
    .post((req, res) => { // I am missing the budget id and category id
        const { amount, description } = req.body;
        const newExpense = new Expense({ amount, description });
        newExpense
            .save()
            .then(new_expense => {
                res.status(201).json({ success: "New Expense Added", new_expense})
            })
    })

module.exports = router;