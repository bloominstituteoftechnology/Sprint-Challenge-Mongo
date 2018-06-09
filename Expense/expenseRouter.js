const express = require('express')
const router = express.Router()
const Expense = require('./expense.js')

router.route("/")
    .post((req, res) => {
        const expense = new Expense(req.body)
        expense.save()
        .then(newExpense => {
            res.status(201).json(newExpense)
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Something went wrong. Please try again later."
            })
        })
    })

    .get((req, res) => {
        Expense.find()
        .then(expenses => {
            res.status(200).json(expenses)
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Something went wrong. Please try again later."
            })
        })
    })

module.exports = router