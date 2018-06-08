const router = require('express').Router();
const Expense = require('./expenseModel');

router
    .route('/')
    .get((req, res) => {
        Expense
            .find()
            .select('amount description -_id')
            .populate('budget', 'budgetAmount -_id title')
            .populate('category', 'title -_id')
            .then(expenses => {
                res.status(200).json(expenses)
            })
            .catch(error => {
                res.status(500).json({ error: error.message })
            })
    })
    .post((req, res) => { 
        const { amount, description, budget, category } = req.body;
        const newExpense = new Expense({ amount, description, budget, category });
        newExpense
            .save()
            .then(new_expense => {
                res.status(201).json({ success: "New Expense Added", new_expense})
            })
            .catch(error => {
                res.status(500).json({ error: error.message })
            })
    })

module.exports = router;
