const router = require('express').Router();
const Budget = require('./budgetModel');

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
    const budget = new Budget(req.body);
    budget.save()
    .then(saveBudget => {
      res.status(200).json(saveBudget);
    })
    .catch(error => {
      res.status(500).json(error);
    });
  });

  module.exports = router;