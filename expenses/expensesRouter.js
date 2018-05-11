const express = require("express");

const Expense = require("./Expense");

const router = express.Router();

router.get("/", (req, res) => {
  Expense.find()
    .populate("budget", "title budgetAmount")
    .populate("category", "title")
    .then(expenses => {
      res.status(200).json(expenses);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Could not get expenses." });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Expense.findById(id)
    .populate("budget", "title budgetAmount")
    .populate("category", "title")
    .then(expense => {
      res.status(200).json(expense);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Could not get expense." });
    });
});

router.post("/", (req, res) => {
  const newExpense = new Expense(req.body);
  newExpense
    .save()
    .then(expense => {
      res.status(201).json(expense);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Could not post expense." });
    });
});

module.exports = router;
