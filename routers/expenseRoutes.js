const router = require('express').Router();
const Expense = require('../data/Expense');

//set end points here
//Postman Test ok! http://localhost:5000/api/expenses 
router.get('/', (req, res) => {
    Expense
    .find()
    .populate('budget')
    .populate('category')
    .then(expenses => {
        res.status(200).json(expenses);
    })
    .catch(err => {
        res.status(500).json({ errorMsg: 'Expense could not be found.'})
    })
})

//Postman Test ok! http://localhost:5000/api/expenses (4 expenses successfully logged to budget/categories)
router.post('/', (req, res) => {
    const { amount, description, budget, category } = req.body;
    const newExpense = { amount, description, budget, category };
    const expense = new Expense(newExpense);
    expense.save().then(expense => {
        res.status(201).json(expense);
    })
    .catch(err => {
        res.status(500).json({ errorMsg: 'Sorry expense could not be created.' });
    })
})

//module export
module.exports = router;