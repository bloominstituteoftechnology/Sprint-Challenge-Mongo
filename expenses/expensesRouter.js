const express = require("express");

const Expense = require("./Expense");

const router = express.Router();

router.get("/", (req, res) => {
  Expense.find()
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
    .then(expense => {
      res.status(200).json(expense);
    })
    .catch(err => {
      res.status(500).json({ errorMessage: "Could not get expense." });
    });
});

module.exports = router;
