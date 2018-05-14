const express = require("express");

const Expense = require("./expenseModel");

const router = express.Router();

router.get("/", (req, res) => {
  let query = Expense.find().select("amount description budget category"); //selector;

  query
    .then(expense => {
      res.status(200).json(expense);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Expense.findById(id)
    .select("amount description budget category") //selector
    .populate("budget", "title budgetAmount") // populator
    .populate("category", "title")
    .then(budget => {
      res.status(201).json(budget);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  const expenseInput = req.body;
  const expense = new Expense(expenseInput);

  expense
    .save()
    .then(newExpense => {
      res.status(201).json(newExpense);
    })
    .catch(err => {
      if (
        expense.amount === undefined ||
        expense.description === undefined ||
        expense.budget === undefined ||
        expense.category === undefined
      ) {
        res.status(400).json({
          errorMessage:
            "Please provide all of the following: 'amount', 'description', 'budget', and 'category'."
        });
      }
      if (expense.amount < 1) {
        res.status(400).json({
          errorMessage:
            "expense must be 1 or higher; you can't spend 0 or less."
        });
      } else {
        res
          .status(500)
          .json("Something went wrong while saving the expense.", err);
      }
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Expense.findByIdAndRemove(id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const expenseEdit = req.body;
  Expense.findByIdAndUpdate(id, expenseEdit)
    .then(response => {
      if (response === null) {
        res.status(404).json({ message: "Expense info not found (Edit)" });
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
