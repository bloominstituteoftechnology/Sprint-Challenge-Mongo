const router = require('express').Router();

const Expense = require('./expense.js');

router.post('/', (req, res) => {
    const expense = new Expense(req.body);

    expense.save()
    .then(expense => {
        res.status(201).json(expense)
    })
    .catch(err => {
        res.status(500).json({ error: 'Could Not Get Budget!' })
    })
})



module.exports = router;