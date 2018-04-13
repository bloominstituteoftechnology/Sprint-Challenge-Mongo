const express = require("express");
const mongoose = require("mongoose");
const Budget = require("./budgetModel.js");
const router = express.Router();

router.route("/")
    .post((req, res) => {
        const budget = new Budget(req.body);

        budget
            .save()
            .then(updatedBudget => {
                res.status(201).json(updatedBudget);
            })
            .catch(err => {
                res.status(500).json(err);
            });
    });

module.exports = router;
