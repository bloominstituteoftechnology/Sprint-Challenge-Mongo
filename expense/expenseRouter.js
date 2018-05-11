const express = require('express');

const Expense = require('./Expense');
const Category = require('../category/Category');
const Budget = require('../budget/Budget');

const router = require('express').Router();

router
    .route('/')
    .get(get)
    .post(post)


function get(req, res) {
    Expense.find()
    .select('amount description')
    .then(expense => {
        Budget.find({})
    })
    .catch(err => {
        res.status(500).json(err);
    });
}

function post(req, res) {
    const expenseInfo = req.body;

    const expense = new Expense(expenseInfo)

    expense
        .save()
        .then(expense => {
            Character.find().then(expense => {
                res.status(200).json(expense);
            });
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

module.exports = router;