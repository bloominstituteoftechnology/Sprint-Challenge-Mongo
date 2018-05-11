const router = require('express').Router();

const Expense = require('../data/Expense');

router.get('/', (req, res) => {
    Expense
    .find()
    .populate('budget')
    .populate('category')
    .then(expenses => {
        res.status(200).json(expenses);
    })
    .catch(err => {
        res.status(500).json({ error: 'The expenses could not be retrieved at this time.'})
    })
})

router.post('/', (req, res) => {
    const { amount, description, budget, category } = req.body;
    const newExpense = { amount, description, budget, category };
    const expense = new Expense(newExpense);
    expense.save().then(expense => {
        res.status(201).json(expense);
    })
    .catch(err => {
        res.status(500).json({ error: 'There was an error creating the expense' });
    })
})

module.exports = router;