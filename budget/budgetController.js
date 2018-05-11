const express = require('express');
const Budget = require('./budgetModel');
const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    Budget.find({})
      .then(budgets => {
        res.status(200).json(budgets);
      })
      .catch(error => {
        res.status(500).json({ message: 'Error requesting budgets' });
      });
  })

  .post((req, res) => {
    const newBudget = new Budget(req.body);
    newBudget
      .save()
      .then(savedBudget => {
        res.status(200).json(savedBudget);
      })
      .catch(error => {
        res.status(500).json({ message: 'Budget was not saved' });
      });
  });
module.exports = router;
