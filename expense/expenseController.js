const router = require("express").Router();

const Expense = require("./Expense");

router
  .route("/")
  .get((req, res) => {
    Expense.find()
      .populate("budget", "title budgetAmount")
      .populate("category", "title")
      .then(expenses => {
        res.status(200).json(expenses);
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
