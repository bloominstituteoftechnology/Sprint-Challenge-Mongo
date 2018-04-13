const router = require('express').Router();

const Budget = require('./budgetModel');

router
    .route('/')
    .post((req, res) => {
        const budget = new Budget(req.body);

        Budget
            .save()
            .then(newBudget => {
                res.status(200).json(newBudget);
            })
            .catch(err => {
                res.status(500).json({ errMsg: "Could not save new budget information." })
            })
    })
    
module.exports = router;