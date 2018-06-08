const router = require('express').Router();
const Expense = require('./expense.js');

const populateQuery = [{
    path: 'category'
}, {
    path: 'budget'
}]


router.route('/')
    .get((req, res) => {
        Expense.find()
            .populate(populateQuery)
            .then(response => res.json(response))
            .catch(err => json.status(500).json({ error: err.message }));
    })
    .post((req, res) => {
        const newExpense = new Expense({ amount, description, budget, category } = req.body);
        newExpense.save()
            .then(response => res.status(201).json(response))
            .catch(err => json.status(500).json({ error: err.message }));
    })

module.exports = router;