const router = require('express').Router();

const Expense = require('./expense');

router
    .route('/')
    .get((req, res) => {
        Expense.find()
            .then(expense => {
                res.status(200).json(expense);
            })
            .catch(err => {
                res.status(500).json({ error: 'err' });
        })
    })

module.exports = router;