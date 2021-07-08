const router = require('express').Router();
const Budget = require('./budget.js');

router
.route('/')
.get((req, res) => {
    Budget.find()
    .then(budget => {
        res.status(200).json(budget);
    })
    .catch(err => res.status(500).json({ error: 'The budget information could not be retrieved.' }));
})
.post((req, res) => {
    const { title, budgetAmount } = req.body;
    const newBudget = new Budget({ title, budgetAmount });
newBudget
    .save()
    .then(savedBudget => {
        res.json(savedBudget);
    })
})





module.exports = router;