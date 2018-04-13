const express = require('express');
const budgetsRouter = express.Router();

const Budget = require('./budgetsModel');

budgetsRouter.post('/', (request, response) => {
  const budgetInfo = request.body;
  const newBudget = new Budget(budgetInfo);

  newBudget
    .save()
    .then(savedBudget => response.status(201).send(savedBudget))
    .catch(err => response.status(500).send(`There was a problem saving the budget: ${err}`));
});

module.exports = budgetsRouter;