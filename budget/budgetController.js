const express = require("express");
const router = express.Router();

const Budget = require("./budgetModel.js");

router
  .get("/:id", (req, res) => {
    const id = req.params.id;
    Budget.findById(id)
      .select('-__v')
      .then(budgets => {
        res.status(200).json(budgets);
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error getting the budgets from the server."
        });
      });
  })
  .get("/", (req, res) => {
    Budget.find({})
      .then(budgets => {
        res.status(200).json(budgets);
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error getting the budgets from the server."
        });
      });
  })
  .post("/", (req, res) => {
    if (!req.body.title) {
      res.status(400).json({
        message: "Please provide the missing 'TITLE' for this budget entry"
      });
    }
    if (!req.body.budgetAmount) {
      res.status(400).json({
        message: "Please provide the missing 'AMOUNT' for this budget entry"
      });
    }
    if (req.body.title && req.body.budgetAmount) {
      const budget = new Budget(req.body);
      budget
        .save()
        .then(savedBudget => {
          res.status(201).json(savedBudget);
        })
        .catch(err => {
          res.json({ message: "There was an error saving the budget." });
        });
    }
  });

module.exports = router;
