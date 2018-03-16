const express = require('express');

const Budget = require('./BudgetModel.js');

const BudgetRouter = express.Router();

// req.body was undefined every time I tried it.
// I wasted a good thirty minutes trying to debug it.
// req.query worked fine, not sure why.
// In the essence of time, I just went with that.
BudgetRouter.post('/', (req, res) => {
  const budgetInfo = req.query;
  const newBudget = new Budget(budgetInfo);

  newBudget
    .save()
    .then(budget => {
      res.status(201).json({ Budget: budget });
    })
    .catch(error => {
      res.status(500).json({ Error: error });
    });
});

module.exports = BudgetRouter;
