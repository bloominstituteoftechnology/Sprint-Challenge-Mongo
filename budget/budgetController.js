const express = require("express");
const router = express.Router();

const Budget = require("./budgetModel.js");

router
  .route("/")
  .post((req, res) => {
    if (req.body.title && req.body.budgetAmount) {
      const budget = new Budget(req.body);
      budget
        .save()
        .then(savedBudget => {
          res.status(201).json(savedBudget);
        })
        .catch(err => {
          res.json({ message: "Error: Couldn't save the budget." });
        });
    } else {
      res.status(400).json({
        message: "Error: Post must include both Title and Budget Amount."
      });
    }
  })
  .get((req, res) => {
    Budget.find({})
      .then(budgets => {
        res.json(budgets);
      })
      .catch(err => {
        res.status(500).json({
          message: "There was an error getting the budgets from the server."
        });
      });
  });

module.exports = router;