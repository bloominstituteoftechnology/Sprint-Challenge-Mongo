const express = require("express");

const Budget = require("./budgetModel");

const router = express.Router();

router.get("/", (req, res) => {
  let query = Budget.find();

  query
    .then(budget => {
      res.status(200).json(budget);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  const BudgetInput = req.body;
  const budget = new Budget(BudgetInput);

  budget
    .save()
    .then(newBudget => {
      res.status(201).json(newBudget);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
