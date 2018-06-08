const router = require('express').Router();
const Budget = require('./budget.js');

router.route('/')
    .get((req, res) => {
        Budget.find()
            .then(response => res.json(response))
            .catch(err => json.status(500).json({ error: err.message }));
    })
    .post((req, res) => {
        const newBudget = new Budget({ title, budgetAmount } = req.body);
        newBudget.save()
            .then(response => res.status(201).json(response))
            .catch(err => res.status(500).json({ error: err.message}));
})

module.exports = router;