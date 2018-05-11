const express = require('express');

const Budget = require('./Budget.js');

const router = require('express').Router();

router
    .route('/')
    // .get(get)
    .post(post)


// function get(req, res) {
//     Budget.find()
//     .then(budget => {
//         res.status(200).json(budget);
//     })
//     .catch(err => {
//         res.status(500).json(err);
//     });
// }

function post(req, res) {
    const budgetInfo = req.body;

    const budget = new Budget(budgetInfo)

    budget
        .save()
        .then(budget => {
            Character.find().then(budget => {
                res.status(200).json(budget);
            });
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

module.exports = router;