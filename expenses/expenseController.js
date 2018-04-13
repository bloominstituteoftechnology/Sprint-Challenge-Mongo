const router = require('express').Router();

const Expense = require('./expenseModel');

router 
    .route('/')
    .post((req, res) => {
        const { amount, description, budget, category } = req.body

        if (!budget || !category) {
            res.status(400).json({ errMsg: "Please indicate the budget and category to apply the provided expense." })
        } else {
            const expense = new Expense(req.body);

            expense
                .save()
                .then(expenses => {
                    res.status(201).json(newExpense);
                })
                .catch(err => {
                    res.status(500),json({ errMsg: "Could not save." });
                })
        }

    })

    .get((req, res) => {

        Expense
            .find({})
            .populate('budget category')
            .then(expenseList => {
                res.status(200).json(expenseList);
            })
            .catch(err => {
                res.status(500).json({ errMsg: "Could not retrieve expenses." });
            })
    })

module.exports = router;