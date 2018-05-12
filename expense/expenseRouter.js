const router = require('express').Router();
const Expense = require('./expenseModel');

router
    .post('/', function post(req, res) {
        const expenseData = req.body;
        const expense = new Expense(expenseData);

        expense
            .save()
            .then(category => {
                res.status(201).json(expense);
            })
            .catch(err => res.status(500).json({message:'Error occured saving expense...'}))
})

module.exports = router;