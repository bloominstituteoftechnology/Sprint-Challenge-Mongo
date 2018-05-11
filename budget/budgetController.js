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

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Budget.findById(id)
    .select("title budgetAmount") //selector
    .then(budget => {
      res.status(201).json(budget);
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
      if (budget.title === undefined || budget.budgetAmount === undefined) {
        res.status(400).json({
          errorMessage:
            "Please provide 'title' and 'budgetAmount' for the budget."
        });
      }
      if (budget.budgetAmount < 0) {
        res.status(400).json({
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

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Budget.findByIdAndRemove(id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const budgetEdit = req.body;
  Budget.findByIdAndUpdate(id, budgetEdit)
    .then(response => {
      if (response === null) {
        res.status(404).json({ message: "Budget info not found (Edit)" });
      } else {
        res.status(200).json(response);
      }
    })
    .catch(err => {
      if (err.name === "CastError") {
        res.status(400).json({
          message: "invalid ID, check and try again."
        });
      }
      res.status(500).json(err);
    });
});

module.exports = router;
