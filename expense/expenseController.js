const router = require("express").Router();

const Expense = require("./expenseModel");

router
  .route("/")
  .get((req, res) => {
    Expense.find()
    .populate('budget category', {_id: 0, title: 1, budgetAmount: 1} )
      .then(expense => {
        res.status(200).json(expense);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  })
  .post((req, res) => {
    const expense = new Expense(req.body);
    expense
      .save()
      .then(savedExpense => {
        res.status(201).json(savedExpense);
      })
      .catch(err => res.status(500).json(err));
  });

module.exports = router;
