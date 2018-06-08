const express = require("express");
const Budget = require("../models/Budget");

const router = express.Router();

router.get("/", (req, res) => {
  Budget.find()
    .then(budgets => {
      res.json(budgets);
    })
    .catch(err => res.status(500).json(err));
});

router.post("/", (req, res) => {
  const { title, budgetAmount } = req.body;
  let budget = new Budget({title, budgetAmount})
  budget.save()
    .then(savedBudget => {
      res.json(savedBudget);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

module.exports = router;