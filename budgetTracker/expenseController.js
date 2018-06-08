const router = require('express').Router();
const Expense = require('./expense.js');

router
.route('/')
.get((req, res) => {
    Expense.find()
    .then(expense => {
        res.status(200).json(expense);
    })
    .catch(err => res.status(500).json({ error: 'The expense information could not be retrieved.' }));
})
.post((req, res) => {
    const { amount, description, budget, category } = req.body;
    const newExpense = new Expense({ amount, description, budget, category });
newExpense
    .save()
    .then(savedExpense => {
        res.json(savedExpense);
    })
})




module.exports = router;