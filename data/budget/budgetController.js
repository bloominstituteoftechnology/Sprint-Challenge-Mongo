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

router.route('/:id')
    .delete((req, res) => {
        const { id } = req.params;
        Budget.findByIdAndDelete(id)
            .then(response => res.json(`The budget with the id ${id} was deleted.`))
            .catch(err => res.status(500).res.json({ error: err.message}));
    })
    .put((req, res) => {
        const { id } = req.params;
        const updatedBudget = ({ title, budgetAmount } = req.body);
        Budget.findByIdAndUpdate(id, updatedBudget)
            .then(response => {
                Budget.findById(id)
                .then(response => res.json(response))
                .catch(err => res.status(500).json({ error: err.message }));
            })
            .catch(err => res.status(500).json({ error: err.message }));
    })

module.exports = router;