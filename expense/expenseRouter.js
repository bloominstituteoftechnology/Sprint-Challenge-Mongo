const express = require('express');

const Expense = require('./expenseModel');
const Category = require('../category/categoryModel.js');
const Budget = require('../budget/budgetModel.js');

const router = express.Router();

router.get('/', (req, res) => {

    Expense
        .find()
        .then(exp => res.status(200).json(exp))
        .catch(err => {
            res.status(500).json(err);
        });
})

// router.post('/', (req, res) => {
//     const id = req.params;
// })

module.exports = router;