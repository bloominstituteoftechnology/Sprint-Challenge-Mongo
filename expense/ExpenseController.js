const mongoose = require("mongoose");
const express = require("express"); // remember to install your npm packages

const router = express.Router();

const Expense = require("./Expense");

const getExpenses = (req, res) => {
  Expense.find({})
    .populate("Budget")
    .populate("Category")
    .then(expenses => {
      console.log(expenses);
      res.status(200).json(expenses);
    })
    .catch(err => {
      res.status(500).json({ message: "Error retrieving expenses", err });
    });
};

const createExpense = (req, res) => {
  const expense = new Expense(req.body);

  expense
    .save()
    .then(newExpense => {
      res.status(201).json(newExpense);
    })
    .catch(err => {
      res.status(500).json({ message: "Error createing expense", err });
    });
};
router.post("/", createExpense);
router.get("/", getExpenses);

module.exports = router;
