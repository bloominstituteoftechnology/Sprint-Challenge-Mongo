const express = require('express');
const mongoose = require('mongoose');
const Expense = require('./Expense.js');

// Express Router
const router = express.Router();

// Set Endpoints Here
router
.route('/')

    .get((req, res) => {
        Expense.find({})
        .populate('budget category')
        .then(expenses => {
            res.status(200).json(expenses);
        })
        .catch(err => {
            res.status(500).json(err);
        })
    })
    .post((req, res) => {
        const expense = new Expense(req.body);
        expense
        .save()
        .then(newExpense => {
            if(newExpense === null) {
                res.status(404).json(newExpense);
            } else {
                res.status(201).json(newExpense);
            }
        })
    .catch(err => res.status(500).json(err));
    })

// Module Export
module.exports = router;