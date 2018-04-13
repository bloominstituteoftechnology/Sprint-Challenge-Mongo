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
        res.status(500).json(error);
      });
  })

  .post((req, res) => {
    const newBudget = new Budget(req.body);
    newBudget
      .save()
      .then(saveBudget => {
        res.status(200).json(saveBudget);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

module.exports = router;
