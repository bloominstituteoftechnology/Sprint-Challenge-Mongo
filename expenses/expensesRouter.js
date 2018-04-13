const express = require("express");

const mongoose = require("mongoose");
const Expenses = require("./expenseModel.js");

const router = express.Router();

// endpoint /api/expenses

router
    .route("/")
    .post((req, res) => {
        const expense = new Expenses(req.body);

        expense
            .save()
            .then(savedExpense => {
                res.status(201).json(savedExpense);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    })
    .get((req, res) => {
        Expenses.find()
            .populate("budget")
            .populate("category")
            .then(expenses => {
                res.status(200).json(expenses);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    });

module.exports = router;
