// Express
const router = require('express').Router();

// Model
const Budget = require('./budgetModel');

// endpoint /api/budgets

router
  .route('/')
  .get((req, res) => {
    Budget.find({})
      .then((budgets) => {
        res.status(200).json(budgets);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  })
  .post((req, res) => {
    const budget = new Budget(req.body);

    budget
      .save()
      .then((savedBudget) => {
        res.status(201).json(savedBudget);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  });

module.exports = router;
