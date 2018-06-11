const express = require('express');
const Expenses = require('./ExpenseSchema.js');
const router = express.Router();

router
    .route('/')
    .get(get)
    .post(post);

router.get('/:id', (req, res) => {
    const { title, budgetAmount } = req.query;
    let query = Expenses.find()
        .sort('category')
        .select('category amount budget')
    if (budgetAmount !== undefined) {
        const filter = new RegExp(budgetAmount, 'i')
        query.where({ budgetAmount: filter })
    }
    query.then(expense => {
        res.status(200).json(expense)
    })
        .catch(err => {
            res.status(500).json(err)
        })
})


function get(req, res) {
    let query = Expenses.find()
        .populate('category', 'title -_id')
        .populate('budget', 'title amount -_id')
        .then(expenses => {
            res.status(200).json(expenses)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "The expenses could not be retrieved.", err });

        });
}

function post(req, res) {
    const expenseData = req.body;
    const expense = new Expenses(expenseData);

    if (!expenseData.description || !expenseData.amount) {
        return res.status(400).json({
            errorMessage: "Please provide a description and expense amount for the expense."
        })
    }
    expense
        .save().then(expense => {
            res.status(201).json(expense)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: "There was an error while saving the expense to the database" });
        });
}



module.exports = router;
