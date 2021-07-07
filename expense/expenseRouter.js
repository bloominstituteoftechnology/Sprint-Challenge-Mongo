const express = require('express');
const router = express.Router();

const expenseModel = require('./expenseModel')

router
    .route('/')
        .post((req,res) => {
            const { amount, description, budget, category } = req.body;
            const newExpense = new expenseModel({ amount, description, budget, category})
            newExpense.save()
                .then(item => {
                    res.status(201).json(item)
                })
                .catch(err => {
                    res.status(500).json({ error: "There was an error while saving the friend to the database."})
                })
        })

        .get((req, res) => {
            expenseModel.find({}, ' -_id')
                .populate('budget', ' title budgetAmount -_id')
                .populate('category', ' title -_id')
                .then(item => {
                res.status(200).json(item)
                })
                .catch(err => {
                res.status(500).json({ errorMessage: "The friends information could not be retrieved." })
                })
        })

router
    .route('/:id')
        .get((req, res) => {
            const { id } = req.params
            expenseModel.findById(id)
                .then(item => {
                    res.status(200).json(item)
                })
        })
    
module.exports = router;