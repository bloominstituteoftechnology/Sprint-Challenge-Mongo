const router = require('express').Router();

const Expense = require('./Expense');

router
    .route('/')
    .post((req, res) => {
        const { amount, description, budget, category } = req.body;

        if(amount === undefined || budget === undefined || category === undefined) {
            res.status(400).json({
                error: 'Amount, budget, and category fields are all required.'
            })
        } else if (budget < 0 || typeof (category) !== 'string' || typeof (description) !== 'string') {
            res.status(400).json({
                error: 'Categories and descriptions are strings, and the budget must be more than $0.'
            })
        } else {
            const newExpense = new Expense({ amount, description, budget, category })
                newExpense 
                    .save()
                        .then(expense => 
                            res.status(201).json(expense)
                        )
                        .catch(error => 
                            res.status(500).json({ error: error.message })
                        )
        }
    })

    .get((req, res) => {
        Expense
            .find()
                .populate(
                    'category',
                    { title: 1, _id: 0 }
                )
                .populate(
                    'budget',
                    { title: 1, budget: 1, _id: 0 }
                )
                .then(expenses => {
                    res.json(expenses);
                })
                .catch(error => {
                    res.status(500).json({ error: error.message });
                })
    })

module.exports = router;