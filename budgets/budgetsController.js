const express = require('express');

const Budget = require('./budgetsModel.js');

const router = express.Router();

router
  .route('/')
  .get((req, res) => {
    Budget.find()
      .then(budgets => {
        res.status(200).json(budgets);
      })
      .catch(err => {
        res.status(500).json([{ error: err.message }]);
      })
  })
  .post((req, res) => {
    const { title, budgetAmount } = req.body;
    const newBudget = new Budget({ title, budgetAmount });
    if (!title || !budgetAmount) {
      res.status(400).json([{ error: "Title and budget amount required." }]);
      return;
    }
    newBudget
      .save()
      .then(() => {
        Budget.find()
          .then(budgets => {
            res.status(201).json(budgets);
          })
          .catch(err => {
            res.status(500).json([{ error: err.message }]);
          })
      })
      .catch(err => {
        res.status(500).json([{ error: err.message }]);
      });
  });

module.exports = router;