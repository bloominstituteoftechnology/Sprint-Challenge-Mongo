const router = require('express').Router();

const Budget = require('./budgetModel.js');

router
    .route('/')
    .get((req, res) => {
        Budget.find()
            .then(budgets => {
                if (budgets.length === 0) {
                    res.status(404).json('There are no budgets in the database.');
                    return;
                }
                else {
                    res.status(200).json(budgets);
                }
            })
            .catch(error => res.status(500).json(error.message))
    })
    .post((req, res) => {
        const budget = ({ title, budgetAmount } = req.body);
        const newBudget = new Budget(budget);
        newBudget.save()
            .then(savedBudget => {
                res.status(201).json(savedBudget);
            })
            .catch(error => res.status(400).json(error.message))
    })

router
    .route('/:id')
    .get((req, res) => {
        const { id } = req.params;
        Budget.findById(id)
            .then(foundBudget => {
                if (foundBudget === null) {
                    res.status(404).json('The requested budget ID could not be found.');
                    return;
                }
                else {
                    res.status(200).json(foundBudget);
                }
            })
            .catch(error => res.status(404).json(error.message));
    })
    .delete((req, res) => {
        const { id } = req.params;
        Budget.findByIdAndRemove(id)
            .then(removeBudget => {
                if (removeBudget === null) {
                    res.status(404).json('The requested budget ID could not be found.');
                    return;
                }
                else {
                    res.status(200).json(removeBudget);
                }
            })
            .catch(error => res.status(404).json(error.message))
    })
    .put((req, res) => {

        const { id } = req.params;
        const updates = ({ title, budgetAmount } = req.body);

        Budget.findByIdAndUpdate(id, updates, { new: true, runValidators: true })
            .then(updatedBudget => {
                if (updatedBudget === null) {
                    res.status(404).json('The requested budget ID could not be found.');
                    return;
                }
                else {
                    res.status(200).json(updatedBudget);
                }
            })
            .catch(error => res.status(404).json(error.message));
    })

module.exports = router;