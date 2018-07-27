const mongoose = require('mongoose');

const Budget = require('../models/budget');

const createBudget = (req, res) => {
    console.log('creating a budget');
    const budget = new Budget(req.body);

    budget
        .save() //save
        .then(newBudget => {
            res.status(201).json(newBudget);
        })
        .catch(err => { // if error
            res.status(500).json({ message: 'Error creating budget', err });
    });
};

module.exports = {
    createBudget
};