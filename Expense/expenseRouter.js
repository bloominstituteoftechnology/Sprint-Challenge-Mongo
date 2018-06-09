const express = require('express')
const router = express.Router()
const Expense = require('./expense.js')

const handleError = (err, req, res, next) => {
    if (err.errors["amount"]) {
        return res.status(400).json({ errorMessage: err.errors["amount"].message })
    } else if (err.errors["description"]) {
        return res.status(400).json({ errorMessage: err.errors["description"].message })
    } else if (err.errors["budget"]) {
        return res.status(400).json({ errorMessage: "Invalid object id for Budget." })
    } else if (err.errors["category"]) {
        return res.status(400).json({ errorMessage: "Invalid object id for category." })
    } else {
        return res.status(500).json({ errorMessage: "There was an error while saving budget to the database." })
    }
}

router.route("/")
    .post((req, res, next) => {
        const expense = new Expense(req.body)
        expense.save()
        .then(newExpense => {
            res.status(201).json(newExpense)
        })
        .catch(error => {
            next(error)
        })
    })

    .get((req, res) => {
        Expense.find()
        .select('amount description budget category -_id')
        .populate({path: 'budget', select: 'title budgetAmount -_id'})
        .populate({path: 'category', select: 'title -_id'})
        .then(expenses => {
            res.status(200).json(expenses)
        })
        .catch(error => {
            res.status(500).json({
                errorMessage: "Something went wrong. Please try again later."
            })
        })
    })

router.use(handleError)

module.exports = router