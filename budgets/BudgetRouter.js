const express = require('express');

const Budget = require('./BudgetModel.js');

const BudgetRouter = express.Router();

// req.body was undefined every time I tried it.
// I wasted a good thirty minutes trying to debug it.
// req.query worked fine, not sure why.
// In the essence of time, I just went with that.
// example: localhost:5000/budget/?title=Budget&budgetAmount=3000
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

//Yeah... no way I'm understanding this in 30 minutes
//Or probably ever... but definitely not in 30 minutes
BudgetRouter.get('/:id/summary', (req, res) => {
  Budget.aggregate([{ $group: { _id: '$expense', totalAmount: { $sum: '$amount' } } }]);
});
module.exports = BudgetRouter;
