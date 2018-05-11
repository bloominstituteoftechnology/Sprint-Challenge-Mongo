const express = require("express");

const Budget = require("./Budget");

const router = express.Router();

// /api/budgets

// GET /
router.route("/").get((req, res) => {
  Budget.find({})
    .then(budgets => {
      res.status(200).json(budgets);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error getting budgets."
      });
    });
});

// GET /:id
router.route("/:id").get((req, res) => {
  const { id } = req.params;

  Budget.findById(id)
    .then(budget => {
      res.status(200).json(budget);
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error getting the specified budget."
      });
    });
});

// POST /
router.route("/").post((req, res) => {
  const { title, budgetAmount } = req.body;
  const budget = new Budget(req.body);

  // Make sure title and budgetAmout provided
  if (title && budgetAmount) {
    budget
      .save()
      .then(budget => {
        res.status(201).json(budget);
      })
      .catch(error => {
        res.status(500).json({
          error: "There was an error posting the new budget."
        });
      });
  } else {
    res.status(404).json({
      error: "Please provide a TITLE and BUDGETAMOUNT to continue."
    });
  }
});

// PUT /:id
router.route("/:id").put((req, res) => {
  const { id } = req.params;
  const update = req.body;

  Budget.findByIdAndUpdate(id, update)
    .then(budget => {
      if (budget) {
        res.status(200).json(budget);
      } else {
        res.status(404).json({
          error: "Budget not found!"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: "There was an error updating the budget."
      });
    });
});

module.exports = router;
