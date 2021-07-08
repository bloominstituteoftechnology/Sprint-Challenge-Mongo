const router = require('express').Router(); 

const Budget = require('./budgetModel');

router.route('/').post((req, res) => {
    const { title, budgetAmount } = req.body;
    const newBudget = new Budget({ title, BudgetAmount });

    newBudget
        .save()
        .then(savedBudget => {
            res.status(201).json(savedBudget);
        })
        .catch(error => {
            res.status(422).json({ error: err });
        });
});



module.exports = router;