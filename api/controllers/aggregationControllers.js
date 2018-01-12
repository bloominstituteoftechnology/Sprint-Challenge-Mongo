const mongoose = require('mongoose');

const Budget = require('../models/budget');

const sumaryByID = (req, res) => {
    const { id } = req.params;
    let budget;

    Budget.find()
        .then((budgets) => {
            budget = budgets;
        })

    res.json(budget);
}

module.exports = { sumaryByID };