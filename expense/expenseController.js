const router = require('express').Router();

const Expense = require('./expenseModel.js');

router
  .route('/')
  .get((req, res) => {
    Expense.find({})
      .then(expenses => {
        res.status(200).json(expenses);
      })
      .catch(err => console.log('err'));
  })
  .post((req, res) => {
    const expense = new Expense(req.body);

    expense
      .save()
      .then(savedExpense => {
        res.status(200).json(savedExpense);
      })
      .catch(err => console.log('error'));
  });

module.exports = router;
