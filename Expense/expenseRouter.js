const router = require('express').Router();

const Expense = require('./ExpenseModel.js');

router
    .route('/')
    .get((req, res) => {
        Expense.find()
            .then(expenses => {
                if (expenses.length === 0) {
                    res.status(404).json('There are no expenses in the database.');
                    return;
                }
                else {
                    res.status(200).json(expenses);
                }
            })
            .catch(error => res.status(500).json(error.message));
    })
    .post((req, res) => {
        const expense = ({ amount, description, budget, category } = req.body);
        const newExpense = new Expense(expense);
        newExpense.save()
            .then(savedExpense => {
                res.status(201).json(savedExpense);
            })
            .catch(error => res.status(400).json(error.message))
    })

router
    .route('/:id')
    .get((req, res) => {
        const { id } = req.params;
        Expense.findById(id)
            .then(foundExpense => {
                if (foundExpense === null) {
                    res.status(404).json('The requested expense ID could not be found.');
                    return;
                }
                else {
                    res.status(200).json(foundExpense);
                }
            })
            .catch(error => res.status(404).json(error.message))
    })
    .delete((req, res) => {
        const { id } = req.params;
        Expense.findByIdAndRemove(id)
            .then(removeExpense => {
                if (removeExpense === null) {
                    res.status(404).json('The requested expense ID could not be found.');
                    return;
                }
                else {
                    res.status(200).json(removeExpense);
                }
            })
            .catch(error => res.status(404).json(error.message))
    })
    .put((req, res) => {
        const { id } = req.params;
        const updates = ({ amount, description, budget, category } = req.body);
        Expense.findByIdAndUpdate(id, updates, { new: true, runValidators: true })
            .then(updatedExpense => {
                if (updatedExpense === null) {
                    res.status(404).json('The requested expense ID could not be found.');
                    return;
                }
                else {
                    res.status(200).json(updatedExpense);
                }
            })
            .catch(error => res.status(404).json(error.message))
    })

module.exports = router; 