const mongoose = require('mongoose');

const Budget = require('../models/budget');

const budgetCreate = (req, res) => {
    const { title, budgetAmount } = req.body;
    const newBudget = new Budget({ title, budgetAmount });

    newBudget
        .save()
        .then((createdBudget) => {
            res.status(200).json(createdBudget);
        })
        .catch((err) => {
            res.status(422).json(err);
            return;
        });
};

module.exports = { budgetCreate };