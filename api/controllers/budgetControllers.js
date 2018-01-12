const Budget = require('../models/budget');
const bodyParser = require('body-parser');

const budgetCreate = (req, res) => {
    // from Budget model file
    const { title, budgetAmmount } = req.body;
    const budget = new Budget({ title, budgetAmmount });

    budget.save()
        .then((newBudget) => {
            res.status(201).json(newBudget);
        })
        .catch((error) => {
            res.status(500).json({error: error.message});
        });
};

const budgetSummary = (req, res) => {
    const { id } = req.params;
    Budget.findById(id)
        .aggregate([{$group : { _id : 'expenses' }}
    ])
    .exec()
    .then((budget) => {
        if (!budget) {
            throw new Error();
        }
    });
}

module.exports = {
    budgetCreate,
    budgetSummary
}