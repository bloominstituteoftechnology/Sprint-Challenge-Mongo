const express = require("express");

const Expenses = require("./expenseModel.js");

const router = express.Router();

// endpoint /api/expenses

router
    .route("/")
    .post((req, res) => {
        const expense = new Expenses(req.body);

        if (!req.body.budget_id || !req.body.category_id) {
            res
                .status(400)
                .json({ message: "Please provide budget_id and category_id" });
            return;
        }

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
            .populate("budget category", "-_id, title")
            .then(expenses => {
                res.status(200).json(expenses);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    });

module.exports = router;
