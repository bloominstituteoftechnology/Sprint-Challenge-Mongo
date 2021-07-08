const router = require('express').Router();

const Expense = require('./expenseModel');

router.route('/').get((req, res) => {
    Expense.find({})
        .then(expenses => {
            res.status(201).json(expense);
        })
        .catch(error => {
            res.status(500).json({ error: err });
        });


});










module.exports = router;