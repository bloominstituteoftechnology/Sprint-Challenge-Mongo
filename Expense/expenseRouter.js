const express = require("express");

const Expense = require("./Expenses");

const router = express.Router();

router.route("/").get((req, res) => {
  Expense.find()
    .populate("budget")
    .populate("category")
    .then(expenses => {
      res.status(200).json(expenses);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          errorMessage: "An error occured while attempting to find expenses",
          error: err
        });
    });
});

router.post("/", (req, res) => {
  const expense = new Expense(req.body);

  expense
    .save()
    .then(expense => {
      res.status(200).json(expense);
    })
    .catch(err => {
      res
        .status(500)
        .json({
          errorMessage: "An error occured while attempting to save expense",
          error: err
        });
    });
});

module.exports = router;
