const express = require("express");
const Expense = require("../models/Expense");

const router = express.Router();

router.post("/", (req, res) => {
  const { amount, description, budget, category } = req.body;
  let expense = new Expense({amount, description, budget, category});
  expense.save()
    .then(savedExpense => {
      res.json(savedExpense);
    })
    .catch(err => {
      res.status(500).json(err);
    })
})

router.get("/", (req, res) => {
  Expense.find()
    .populate("budget", "title amount -_id")
    .populate("category", "title -_id")
    .then(expenses => {
      res.json(expenses);
    })
    .catch(err => {
      res.status(500).json(err);
    })
})

module.exports = router;