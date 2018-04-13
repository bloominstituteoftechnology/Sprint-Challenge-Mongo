const express = require('express');
const expensesRouter = express.Router();

const Expense = require('./expensesModel');

expensesRouter.post('/', (request, response) => {
  const expenseInfo = request.body;
  const newExpense = new Expense(expenseInfo);

  newExpense
    .save()
    .then(savedExpense => response.status(201).send(savedExpense))
    .catch(err => response.status(500).send(`There was a problem saving the expense: ${err}`));
});

expensesRouter.get('/:id', (request, response) => {
  const { id } = request.params;

  Expense
    .findById(id)
    .populate('budget')
    .populate('category')
    .then(populatedExpense => response.status(200).send(populatedExpense))
    .catch(err => response.status(500).send(`There was a problem retrieving or populating the expense: ${err}`));
})

module.exports = expensesRouter;