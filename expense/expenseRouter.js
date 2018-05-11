const express = require("express");

const Expense = require("./Expense");

const router = express.Router();

// /api/expenses

// GET /
router.route("/").get((req, res) => {
  Expense.find({})
    .populate("budget", "category")
    .then(expenses => {
      res.status(200).json(expenses);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error getting expenses."
      });
    });
});

// GET /:id
router.route("/:id").get((req, res) => {
  const { id } = req.params;

  Expense.findById(id)
    .then(expense => {
      res.status(200).json(expense);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error getting the specified expense."
      });
    });
});

// POST /
router.route("/").post((req, res) => {
  const { amount, description, budget, category } = req.body;
  const expense = new Expense(req.body);

  // Make sure amount, description, budget and category provided
  if (amount && description && budget && category) {
    expense
      .save()
      .then(expense => {
        res.status(201).json(expense);
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error posting the new expense."
        });
      });
  } else {
    res.status(404).json({
      error:
        "Please provide an AMOUNT, DESCRIPTION, BUDGET ID, and CATEGORY ID to continue."
    });
  }
});

// PUT /:id
router.route("/:id").put((req, res) => {
  const { id } = req.params;
  const update = req.body;

  Expense.findByIdAndUpdate(id, update)
    .then(expense => {
      if (expense) {
        res.status(200).json(expense);
      } else {
        res.status(404).json({
          error: "Expense not found!"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error updating the expense."
      });
    });
});

module.exports = router;
