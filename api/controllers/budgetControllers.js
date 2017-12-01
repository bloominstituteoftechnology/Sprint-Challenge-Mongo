const mongoose = require('mongoose');
const Budget = require('../models/budget');


const newBudget = (req, res) => {
    const { title, budgetAmount  } = req.body;
    const newBudget = new Budget({ title, budgetAmount  });
    newBudget.save((err, createdBudget) => {
        if (err) {
            res.status(422).json({'get broke fool': err});
            return;
    }
    res.json(createdBudget);
    });
};

module.exports = {
    newBudget,
};