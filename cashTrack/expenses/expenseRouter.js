const express = require('express');

const Expense = require('./expense.js');

const router = express.Router();

router
    .route('/')
        .get((req, res) => {
            Expense
            .find({})
            .then(ans => {
                res.status(200).json(ans);
            })
            .catch(err => {
                res.status(500).json(err);
            })
        })
        .post((req, res) => {
            const newExp = new Expense(req.body);
            newExp
            .save()
            .then(ans => {
                res.status(200).json(ans);
            })
            .catch(err => {
                res.status(500).json(err);
            })
        })

module.exports = router;