const express = require("express");
const router = express.Router();

const Budget = require("./budgetModel.js");

router
  .route("/")
  .post((req, res) => {
    const budget = new Budget(req.body);
    budget
      .save()
      .then(savedBudget => {
        res.status(201).json(savedBudget);
      })
      .catch(err => {
        res.json({ message: "There was an error saving the budget." });
      });
  })
  .get((req, res) => {
    Budget.find({}).then(budgets => {
      res.json(budgets);
    });
  });

module.exports = router;
