const express = require('express');
const Budget = require('../models/BudgetModel.js');

const budgetRouter = express.Router();

budgetRouter.post('/', (req, res) => {
  const budgetInfo = req.body;
  const budget = new Budget(budgetInfo);

  budget
    .save()
    .then(newBudget => {
      res.status(200).json(newBudget);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Error creating new Budget', error: err });
    });
});

module.exports = budgetRouter;
