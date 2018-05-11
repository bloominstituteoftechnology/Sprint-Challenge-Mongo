const express = require("express");

const Expense = require("./expenseModel");

const router = express.Router();

// router.get("/", (req, res) => {
//   let query = Category.find();
// });

router.post("/", (req, res) => {
  const expenseInput = req.body;
  const expense = new Expense(expenseInput);

  expense
    .save()
    .then(newExpense => {
      res.status(201).json(newExpense);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});


module.exports = router;