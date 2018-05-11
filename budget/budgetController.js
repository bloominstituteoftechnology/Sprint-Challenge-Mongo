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
      if (
        budget.title === undefined ||
        budget.budgetAmount === undefined
      ) {
        res.status(400).json({
          errorMessage:
            "Please provide 'title' and 'budgetAmount' for the budget."
        });
      }
      if (budget.budgetAmount < 0) {
        res
          .status(400)
          .json({
            errorMessage:
              "Budget must be 0 or higher, unless you're losing money already."
          });
      } else {
        res
          .status(500)
          .json("Something went wrong while saving the budget.", err);
      }
    });
});

module.exports = router;
