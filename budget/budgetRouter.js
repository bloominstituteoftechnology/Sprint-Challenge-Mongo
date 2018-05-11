const express = require('express');

const Budget = require('./Budget.js');

const router = require('express').Router();

router
    .route('/')
    .get(get)
    .post(post)
router
    .route('/:id')
    .put(put)
    .delete(remove)


function get(req, res) {
    Budget.find()
    .then(budget => {
        res.status(200).json(budget);
    })
    .catch(err => {
        res.status(500).json(err);
    });
}

function post(req, res) {
    const budgetInfo = req.body;

    const budget = new Budget(budgetInfo)

    budget
        .save()
        .then(budget => {
            res.status(201).json(budget);
        })
        .catch(err => {
            res.status(500).json(err);
        });
}

function put(req, res) {
    const { id } = req.params;
    const budgetChange = req.body;

    Budget
    .findByIdAndUpdate(id, budgetChange)
    .then(budget => {
        res.status(200).json(budget);
    })
    .catch(err => {
        res.status(500).json(err);
    });
}

function remove(req,res) {
    const { id } = req.params;

    Budget
    .findByIdAndRemove(id)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json(err);
    })
}

module.exports = router;