const express = require('express');

const Budgets = require('./expenseModel');

const router = express.Router();

router.post('/', (req, res) => {
    const expenseInfo = req.body;
    const expense = new expense(expenseInfo);

    expense.save()
    .then(newexp => {
        res.send(newexp);
    })
    .catch(err => {
        res.status(500).json({ err: 'there was an error posting category'})
    })
});

module.exports = router;