const mongoose = require('mongoose');
const Budget = require('../models/budget');
const budgetCreate = (req, res) => {
    const {title, budgetAmount} = req.body;
    let budget = new Budget({title, budgetAmount});
    budget
        .save()
        .then((results) => {
            res.status(200).json(results);
            console.log('user has created budget', results)
        })
        .catch((err) => {
            res.status(500).send(err)
            console.log('problem create new budget', err)
        })
}

module.exports = { budgetCreate };