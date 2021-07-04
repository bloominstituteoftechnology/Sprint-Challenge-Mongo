const router = require('express').Router();
const Expense = require('./expense.js');

const populateQuery = [{
    path: 'category'
}, {
    path: 'budget'
}]


router.route('/')
    .get((req, res) => {
        Expense.find()
            .populate(populateQuery)
            .then(response => res.json(response))
            .catch(err => json.status(500).json({ error: err.message }));
    })
    .post((req, res) => {
        const newExpense = new Expense({ amount, description, budget, category } = req.body);
        newExpense.save()
            .then(response => res.status(201).json(response))
            .catch(err => json.status(500).json({ error: err.message }));
    })

router.route('/:id')
    .delete((req, res) => {
        const { id } = req.params;
        Expense.findByIdAndDelete(id)
            .then(response => res.json(`The expense with the id ${id} was deleted.`))
            .catch(err => res.status(500).res.json({ error: err.message}));
    })
    .put((req, res) => {
        const { id } = req.params;
        const updatedExpense = ({ amount, description, budget, category } = req.body);
        Expense.findByIdAndUpdate(id, updatedExpense)
            .then(response => {
                Expense.findById(id)
                .then(response => res.json(response))
                .catch(err => res.status(500).json({ error: err.message }));
            })
            .catch(err => res.status(500).json({ error: err.message }));
    })

module.exports = router;